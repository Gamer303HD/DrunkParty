// Game State
let gameActive = false;
let countdownInterval = null;

// Enhanced categories with emojis
const categories = [
    '⚽ Sport Arten', '🎵 Musik Künstler', '🎬 Filme', '📚 Bücher', '🎸 Musikinstrumente',
    '🚗 Automarken', '🏙️ Städte', '🌍 Länder', '🍭 Süßigkeiten', '🥤 Getränke', '🐾 Tiere',
    '📺 TV-Serien', '🪐 Planeten', '🦠 Krankheiten', '🔧 Werkzeuge', '🎮 Videospiele',
    '🕹️ Spielkonsolen', '🍺 Biersorten', '⚽ Ballsportarten', '📱 Soziale Netzwerke',
    '💻 Betriebssysteme', '🛒 Online-Shops', '📹 YouTuber', '🍕 Essen', '🎨 Farben',
    '👕 Kleidung', '🏠 Möbel', '🌸 Blumen', '🎪 Berufe'
];

document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    initializeParticles();
    initializeAudioControl();
});

function initializeGame() {
    document.getElementById('startButton').addEventListener('click', startGame);
    document.getElementById('startButton1').style.display = 'none';
    document.getElementById('timer').classList.add('hidden');
    document.getElementById('category').classList.add('hidden');
}

let isAudioEnabled = true;

function initializeAudioControl() {
    const audioToggle = document.getElementById('audioToggle');
    const savedAudioState = localStorage.getItem('bombGameAudio');
    if (savedAudioState !== null) {
        isAudioEnabled = savedAudioState === 'true';
    }
    updateAudioButton();

    audioToggle.addEventListener('click', function() {
        isAudioEnabled = !isAudioEnabled;
        localStorage.setItem('bombGameAudio', isAudioEnabled.toString());
        updateAudioButton();
        if (isAudioEnabled) playSound('tick');
    });
}

function updateAudioButton() {
    const audioToggle = document.getElementById('audioToggle');
    if (isAudioEnabled) {
        audioToggle.textContent = '🔊';
        audioToggle.classList.remove('muted');
        audioToggle.title = 'Sound ausschalten';
    } else {
        audioToggle.textContent = '🔇';
        audioToggle.classList.add('muted');
        audioToggle.title = 'Sound einschalten';
    }
}

function initializeParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(p => {
        const size = Math.random() * 4 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (6 + Math.random() * 4) + 's';
    });
}

function startGame() {
    if (gameActive) return;
    gameActive = true;
    playSound('start');

    document.getElementById('startButton').style.display = 'none';
    document.getElementById('startButton1').style.display = 'flex';
    document.getElementById('category').classList.remove('hidden');
    document.getElementById('timer').classList.remove('hidden');

    const category = categories[Math.floor(Math.random() * categories.length)];
    const categoryTextElement = document.querySelector('.category-text');
    categoryTextElement.textContent = category;

    document.querySelector('.category-card').style.animation = 'slideUp 0.8s ease-out';
    const bombElement = document.getElementById('bomb');
    bombElement.classList.add('pulse');

    const time = Math.floor(Math.random() * (45 - 20 + 1)) + 20;
    let countdown = time;
    updateTimerDisplay(countdown);

    countdownInterval = setInterval(() => {
        countdown--;
        updateTimerDisplay(countdown);

        if (countdown <= 10 && countdown > 0) {
            playSound('tick');
            addUrgencyEffects(countdown);
        }

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            explodeBomb();
        }
    }, 1000);
}

function updateTimerDisplay(time) {
    // Kein timer-text mehr → Funktion bleibt leer
}

function addUrgencyEffects(countdown) {
    const bomb = document.getElementById('bomb');
    const timerCircle = document.querySelector('.timer-circle');

    bomb.style.animationDuration = `${0.3 + (countdown * 0.05)}s`;
    timerCircle.style.borderColor = '#ff4757';
    timerCircle.style.boxShadow = '0 0 20px rgba(255, 71, 87, 0.6), 0 8px 32px rgba(31, 38, 135, 0.37)';

    if (countdown <= 5) {
        document.body.style.animation = `urgencyShake 0.1s ease-in-out infinite`;
    }
}

function explodeBomb() {
    gameActive = false;
    if (countdownInterval) clearInterval(countdownInterval);

    playSound('explosion');
    const bombElement = document.getElementById('bomb');
    bombElement.classList.remove('pulse');
    bombElement.classList.add('explode');

    document.body.classList.add('exploded');
    document.body.style.animation = 'explosionShake 0.5s ease-out';

    setTimeout(() => {
        const categoryCard = document.querySelector('.category-card');
        const categoryIcon = document.querySelector('.category-icon');
        const categoryText = document.querySelector('.category-text');

        categoryCard.classList.add('game-over');
        categoryIcon.textContent = '💀';
        categoryText.textContent = 'VERLOREN!';
        categoryText.style.animation = 'gameOverPulse 1s ease-out';

        setTimeout(() => {
            bombElement.style.display = 'none';
        }, 500);
    }, 400);

    document.getElementById('timer').classList.add('hidden');

    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);

    createExplosionEffect();
}

function createExplosionEffect() {
    const explosionContainer = document.createElement('div');
    explosionContainer.style.position = 'fixed';
    explosionContainer.style.top = '50%';
    explosionContainer.style.left = '50%';
    explosionContainer.style.transform = 'translate(-50%, -50%)';
    explosionContainer.style.pointerEvents = 'none';
    explosionContainer.style.zIndex = '1000';

    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.style.position = 'absolute';
        p.style.width = Math.random() * 8 + 4 + 'px';
        p.style.height = p.style.width;
        p.style.background = `hsl(${Math.random() * 60 + 10}, 100%, 60%)`;
        p.style.borderRadius = '50%';
        p.style.animation = `explodeParticle ${0.8 + Math.random() * 0.4}s ease-out forwards`;

        const angle = (Math.PI * 2 * i) / 20;
        const distance = 100 + Math.random() * 100;
        p.style.setProperty('--end-x', Math.cos(angle) * distance + 'px');
        p.style.setProperty('--end-y', Math.sin(angle) * distance + 'px');

        explosionContainer.appendChild(p);
    }

    document.body.appendChild(explosionContainer);

    setTimeout(() => {
        explosionContainer.remove();
    }, 1500);
}

// CSS for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes explodeParticle {
        0% { transform: translate(0, 0) scale(1); opacity: 1; }
        100% { transform: translate(var(--end-x), var(--end-y)) scale(0); opacity: 0; }
    }

    @keyframes urgencyShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        75% { transform: translateX(2px); }
    }
`;
document.head.appendChild(style);

window.restartGame = function() {
    gameActive = false;
    if (countdownInterval) clearInterval(countdownInterval);

    document.body.classList.remove('exploded');
    document.body.style.animation = '';
    document.getElementById('startButton').style.display = 'flex';
    document.getElementById('startButton1').style.display = 'none';
    document.getElementById('timer').classList.add('hidden');
    document.getElementById('category').classList.add('hidden');

    const bombElement = document.getElementById('bomb');
    bombElement.classList.remove('pulse', 'explode');
    bombElement.style.display = 'flex';
    bombElement.style.animationDuration = '';

    const timerCircle = document.querySelector('.timer-circle');
    timerCircle.style.borderColor = '';
    timerCircle.style.boxShadow = '';

    const categoryCard = document.querySelector('.category-card');
    const categoryIcon = document.querySelector('.category-icon');
    const categoryText = document.querySelector('.category-text');
    categoryCard.classList.remove('game-over');
    categoryIcon.textContent = '🎯';
    categoryText.textContent = '';
    categoryText.style.animation = '';
    categoryText.style.color = '';
    categoryText.style.textShadow = '';

    document.querySelectorAll('[style*="position: fixed"]').forEach(e => {
        if (e.style.zIndex === '1000') e.remove();
    });
};

// Web Audio API
let audioContext;

function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

function createExplosionSound() {
    if (!isAudioEnabled) return;
    try {
        const ctx = initAudioContext();
        const duration = 1.5;
        const buffer = ctx.createBuffer(2, duration * ctx.sampleRate, ctx.sampleRate);

        for (let ch = 0; ch < 2; ch++) {
            const data = buffer.getChannelData(ch);
            for (let i = 0; i < data.length; i++) {
                const t = i / ctx.sampleRate;
                let sample = Math.sin(2 * Math.PI * 60 * t) * Math.exp(-t * 3);
                sample += Math.sin(2 * Math.PI * 200 * t) * Math.exp(-t * 8) * 0.5;
                sample += (Math.random() * 2 - 1) * Math.exp(-t * 5) * 0.3;
                data[i] = sample * Math.exp(-t * 2) * 0.3;
            }
        }

        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.start();
    } catch (err) {
        console.log('Explosion sound error:', err);
    }
}

function createTickSound() {
    if (!isAudioEnabled) return;
    try {
        const ctx = initAudioContext();
        const buffer = ctx.createBuffer(1, 0.1 * ctx.sampleRate, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            const t = i / ctx.sampleRate;
            data[i] = Math.sin(2 * Math.PI * 800 * t) * Math.exp(-t * 50) * 0.2;
        }
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.start();
    } catch (err) {
        console.log('Tick sound error:', err);
    }
}

function createStartSound() {
    if (!isAudioEnabled) return;
    try {
        const ctx = initAudioContext();
        const buffer = ctx.createBuffer(1, 0.5 * ctx.sampleRate, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            const t = i / ctx.sampleRate;
            const f = 400 + (t * 300);
            data[i] = Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 2) * 0.15;
        }
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.start();
    } catch (err) {
        console.log('Start sound error:', err);
    }
}

function playSound(type) {
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    }
    switch(type) {
        case 'explosion': createExplosionSound(); break;
        case 'tick': createTickSound(); break;
        case 'start': createStartSound(); break;
    }
}

// Tastenkürzel
document.addEventListener('keydown', function(event) {
    switch(event.code) {
        case 'Space':
            event.preventDefault();
            if (!gameActive && document.getElementById('startButton').style.display !== 'none') {
                startGame();
            }
            break;
        case 'KeyR':
            if (!gameActive && document.getElementById('startButton1').style.display !== 'none') {
                window.location.reload();
            }
            break;
        case 'Escape':
            window.location.href = '/index.html';
            break;
    }
});

// Swipe-Support
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', e => touchStartY = e.changedTouches[0].screenY);
document.addEventListener('touchend', e => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const diff = touchStartY - touchEndY;
    if (Math.abs(diff) > 50) {
        if (diff > 0 && !gameActive) startGame();
        if (diff < 0 && !gameActive) window.location.reload();
    }
}

// Performance: Weniger Animation bei schwachen Geräten
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
    document.documentElement.style.setProperty('--reduced-motion', '1');
}

// Pausieren bei Tab-Wechsel
document.addEventListener('visibilitychange', () => {
    if (document.hidden && gameActive) clearInterval(countdownInterval);
});
