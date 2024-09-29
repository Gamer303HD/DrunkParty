const https = require('https');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 443; // Default port for HTTPS

// Pfade zu den SSL-Zertifikatdateien
const privateKey = fs.readFileSync('/etc/letsencrypt/live/drunkparty.de/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/drunkparty.de/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/drunkparty.de/chain.pem', 'utf8'); // Optional, f�r CA-B�ndel

const credentials = { key: privateKey, cert: certificate, ca: ca };

const logsDir = path.join(__dirname, 'log');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}

const logAccess = (ip, userAgent) => {
    const date = new Date();
    const dateStr = date.toISOString().slice(0, 10);
    const dailyLogDir = path.join(logsDir, dateStr);

    if (!fs.existsSync(dailyLogDir)) {
        fs.mkdirSync(dailyLogDir, { recursive: true });
    }

    const logFileName = path.join(dailyLogDir, 'log.txt');
    const logMessage = `${date.toISOString()} - IP: ${ip}, User-Agent: ${userAgent}\n`;

    fs.appendFile(logFileName, logMessage, (err) => {
        if (err) {
            console.error(`Fehler beim Schreiben des Logs: ${err}`);
        }
    });
};

const sseClients = new Set();

const sendSseUpdate = () => {
    const message = `data: ${onlineUsers.size}\n\n`;
    sseClients.forEach(client => client.write(message));
};

// Zeit bis zur Ber�cksichtigung als offline in Millisekunden (3 Minuten)
const OFFLINE_THRESHOLD = 2 * 60 * 1000;

const requestHandler = (req, res) => {
    const visitorIp = req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    logAccess(visitorIp, userAgent);

    if (req.url === '/online') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`${onlineUsers.size}`);
        return;
    }

    if (req.url === '/events') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });

        const clientId = Date.now();
        const newClient = res;
        sseClients.add(newClient);

        newClient.write(`data: ${onlineUsers.size}\n\n`);

        req.on('close', () => {
            sseClients.delete(newClient);
        });
        return;
    }

    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    const extname = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.svg': 'image/svg+xml'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                fs.readFile(path.join(__dirname, '404.html'), (error, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            } else {
                res.writeHead(500);
                res.end(`Entschuldigung, wenden Sie sich an den Site-Administrator: ${error.code} ..\n`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
};

const onlineUsers = new Map(); // Verwenden einer Map, um Zeitstempel zu speichern

const updateOnlineUsers = () => {
    const now = Date.now();
    onlineUsers.forEach((lastActive, ip) => {
        if (now - lastActive > OFFLINE_THRESHOLD) {
            onlineUsers.delete(ip);
            sendSseUpdate();
        }
    });
};

// Regelm��ige �berpr�fung der Online-Status
setInterval(updateOnlineUsers, 60 * 1000); // Alle 60 Sekunden

const server = https.createServer(credentials, (req, res) => {
    const ip = req.socket.remoteAddress;
    onlineUsers.set(ip, Date.now());
    sendSseUpdate();

    requestHandler(req, res);

    req.on('close', () => {
        onlineUsers.set(ip, Date.now()); // Zeitstempel aktualisieren, wenn der Benutzer die Verbindung schlie�t
        setTimeout(() => {
            onlineUsers.delete(ip); // Benutzer wird nach 3 Minuten als offline betrachtet, wenn keine Aktivit�t erfolgt
            sendSseUpdate();
        }, OFFLINE_THRESHOLD);
    });
});

server.listen(port, () => {
    console.log(`Server l�uft auf https://drunkparty.de:${port}`);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Prozess beendet');
    });
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Prozess unterbrochen');
    });
});
