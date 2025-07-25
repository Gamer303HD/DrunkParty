
// Questions and Tasks Arrays
const wahrheit = [
    "Was ist das Peinlichste, was dir je passiert ist?",
    "Wie viele Jungen / Mädchen hast du schon geküsst?",
    "Hast du schon einmal eine Person des gleichen Geschlechts geküsst?",
    "In wen bist du verliebt?",
    "Welches Tier passt am besten zu dir und warum?",
    "Welchen Star findest du heiß?",
    "Wann hattest du das letzte Mal Sex?",
    "Was ist deine schlimmste Macke?",
    "Hast du schon mal etwas geklaut?",
    "Wann hast du das letzte Mal gelogen?",
    "Wann hast du das letzte Mal geweint?",
    "Was ist deine größte Angst?",
    "Was ist deine geheimste Fantasie?",
    "Was war der größte Fehler deines Lebens?",
    "Was war dein schlimmstes Date?",
    "Was ist deine geheimste, dunkle Fantasie?",
    "Mit welcher berühmten Person würdest du gerne einmal eine Nacht verbringen?",
    "Wohin würdest du dich jetzt am liebsten beamen?",
    "Wer aus der Runde, glaubst du, hat den größten Brustumfang?",
    "Du musst einen Star heiraten, wen?",
    "Was hältst du von offenen Beziehungen?",
    "Wen aus der Runde würdest du auf eine einsame Insel mitnehmen?",
    "Welche Straftat hast du schon mal begangen?",
    "Wo & mit wem war dein erster Kuss?",
    "Würdest du jemanden in diesem Raum gerne küssen?",
    "Was ist das Schlimmste, was dir jemals angetan wurde?",
    "Was war das schlechteste Date, auf dem du mal warst?",
    "Was bereust du in deinem Leben am meisten?",
    "Hast du jemals geflunkert, um aus einem schlechten Date zu entkommen?",
    "Hast du schon einmal Drogen genommen? (außer Alkohol und Tabak)",
    "Wer aus der Runde sollte am dringendsten zum Friseur?",
    "Was würdest du tun, wenn du für einen Monat ein Mann/eine Frau wärst?",
    "Was wissen deine Eltern nicht über dich?",
    "Hast du verborgene Talente?",
    "Was ist das Peinlichste in deinem Kleiderschrank?",
    "Was war der verrückteste Traum, den du je hattest?",
    "Wie oft wechselt du deine Bettwäsche?",
    "Warst du schon einmal nackt in der Öffentlichkeit?",
    "Hast du schon einmal jemanden geghostet?",
    "Was war der größte Fehler, den du in deinem Leben begangen hast?",
    "Was war das Ekligste, was du jemals getan/gegessen hast?",
    "In welchen Star warst du das erste Mal verknallt?",
    "Welches wirklich kindische Verhalten hast du immer noch?",
    "Hast du schon einmal jemanden für etwas beschuldigt, an dem du Schuld warst? Und was war es?",
    "Mit welcher Person im Raum würdest du am ehesten knutschen?",
    "Welches ist der merkwürdigste Ort, an dem du gepinkelt hast?",
    "Wer in dieser Runde kennt dich am besten?",
    "Was ist dein größter Traum?",
    "Was war das Gemeinste, was du jemandem je angetan hast?",
    "Was war dein peinlichster Kino-Moment?",
    "Was ist dein schlimmster Alptraum?",
    "Welches Geheimnis hat niemand in dieser Runde über dich?",
    "Mit welcher Person aus der Runde könntest du dir eine Beziehung vorstellen?",
    "Was war die lustigste Begegnung, die du jemals mit einem Fremden hattest?",
    "Was war das teuerste Geschenk, das du jemals gekauft hast?",
    "Was ist dein schlimmstes Schul-Erlebnis?",
    "Welches Lied kannst du auswendig?",
    "Was ist das Verrückteste, was du jemals für Liebe getan hast?",
    "Welches Geheimnis bewahrst du vor deinen Eltern?",
    "Was ist dein Lieblingsschulfach und warum?",
    "Was ist das Mutigste, was du je getan hast?",
    "Was war der größte Misserfolg in deinem Leben?",
    "Was ist das Ekligste, das du jemals in den Mund genommen hast?",
    "Wenn du einen Tag lang unsichtbar sein könntest, was würdest du tun?",
    "Was ist dein ungewöhnlichstes Haustier gewesen?",
    "Wenn du einen Tag lang jemand anderes sein könntest, wer wäre das?",
    "Was ist die lustigste Entschuldigung, die du je benutzt hast, um nicht zur Schule oder zur Arbeit zu gehen?",
    "Wer war deine erste große Liebe?",
    "Was ist dein Lieblingsfilm und warum?",
    "Was war das Beste, das du je gekocht oder gebacken hast?",
    "Wenn du mit einer Person aus der Runde auf eine einsame Insel gehen müsstest, wer wäre das und warum?",
    "Welche berühmte Person würdest du gerne mal treffen und warum?",
    "Was ist deine größte Schwäche?",
    "Was war dein peinlichstes Erlebnis beim Arzt?",
    "Was ist das Verrückteste, das du jemals getan hast, um Aufmerksamkeit zu bekommen?",
    "Was war die lustigste Begegnung mit einem Polizisten, die du je hattest?",
    "Was ist der ungewöhnlichste Ort, an dem du jemals geschlafen hast?",
    "Was ist das Peinlichste, das du jemals für Geld getan hast?",
    "Was war der ungewöhnlichste Traum, den du je hattest?",
    "Welche Person, die du persönlich kennst, bewunderst du am meisten und warum?",
    "Was ist die gefährlichste Sache, die du jemals gemacht hast?",
    "Was war die schlimmste Lüge, die du je erzählt hast, ohne erwischt zu werden?",
    "Was ist die gemeinste Sache, die du je über jemanden gesagt oder gedacht hast?",
    "Wann hast du das letzte Mal so richtig gelacht und warum?",
    "Was war der beste Tag deines Lebens?",
    "Welchen Beruf hättest du gerne und warum?",
    "Was ist dein Lieblingsbuch und warum?",
    "Welche Superkraft hättest du gerne?",
    "Was ist das Mutigste, was du je getan hast?",
    "Wer in dieser Runde ist dir am ähnlichsten und warum?",
    "Was ist das Peinlichste, was du jemals getrunken hast?",
    "Was war die lustigste Begegnung, die du je mit einem Tier hattest?",
    "Was war die beste Party, die du je besucht hast?",
    "Was ist das Peinlichste, was dir je in der Schule passiert ist?",
    "Hast du jemals einen Streich gespielt und wenn ja, welchen?",
    "Was ist das Verrückteste, was du jemals im Urlaub gemacht hast?",
    "Welche berühmte Person würdest du gerne mal küssen?",
    "Was war dein peinlichstes Erlebnis in einem Restaurant?",
    "Was ist die lustigste Begegnung, die du je mit einem Verkäufer hattest?",
    "Was ist das Schlimmste, was du jemals getan hast, um Aufmerksamkeit zu bekommen?",
    "Was war das Dümmste, was du jemals getan hast, weil du zu viel getrunken hast?"
];

const pflicht = [
    "Füttere die Person rechts neben dir mit etwas Leckerem.",
    "Trinke ein großes Glas eines Getränks auf Ex.",
    "Mache fünf Liegestütze.",
    "Verbringe eine Runde mit den Füßen nach oben, Kopf nach unten.",
    "Versuch einen Zeh in den Mund zu nehmen.",
    "Mache 50 Kniebeugen.",
    "Mache einen Purzelbaum.",
    "Benimm dich, wie ein Huhn.",
    "Riech am Fuß deines linken Nachbars.",
    "Sprich mit bayrischem/sächsischem/einem anderen Dialekt.",
    "Beende jeden Satz mit „... nicht!",
    "Stecke dir Eiswürfel in die Hose.",
    "Sprich, ohne deinen Mund zu schließen.",
    "Führe ein drei-minütiges Stand-Up-Comedy-Programm auf.",
    "Erzähle der Person gegenüber, wie toll er/sie ist.",
    "Nenne eine Sache über dich, wegen der du schon Komplimente bekommen hast.",
    "Iss etwas und tue so, als wäre es das leckerste, was du je gegessen hast.",
    "Mache die lustigste Grimasse, die dir einfällt.",
    "Finde heraus, wessen Haare am besten riechen.",
    "Iss eine Banane in einem verführerischen Stil.",
    "Iss etwas, ohne deine Hände zur Hilfe zu nehmen.",
    "Küsse die anders geschlechtliche Person, die als erstes rechts von dir kommt.",
    "Benimm dich zwei Minuten wie ein Huhn.",
    "Schreibe eine versaute Nachricht an deinen letzten WhatsApp-Kontakt.",
    "Mach eine Person in der Gruppe deiner Wahl nach.",
    "Fülle fünf verschiedene Flüssigkeiten in ein Glas und trinke es aus.",
    "Der Spieler rechts von dir darf dir ein Gebräu aus allen möglichen Zutaten mischen und du musst es trinken.",
    "Fluch zehn Sekunden lang wie ein Kesselflicker.",
    "Iss einen Esslöffel Senf.",
    "Ziehe ein Kleidungsstück aus.",
    "Riech an den Achselhöhlen jeder Person im Raum.",
    "Versuche, für 10 Sekunden zu breakdancen.",
    "Die Gruppe darf sich ein Lied aussuchen, du musst dazu tanzen!",
    "Singe ein Lied vor.",
    "Lass dich von der Gruppe in ein Tier verwandeln (mit Make-Up, Kleidung, etc.).",
    "Mache eine Minute lang Hampelmann-Sprünge.",
    "Zähle rückwärts von 100 bis 0.",
    "Springe einbeinig auf einem Bein umher.",
    "Male mit geschlossenen Augen ein Bild.",
    "Lege deinen Kopf für eine Minute auf den Schoß der Person neben dir.",
    "Lass dir von der Person rechts neben dir die Haare kämmen.",
    "Erzähle einen Witz.",
    "Verbinde dir die Augen und errate, wer aus der Gruppe dir ein Getränk gibt.",
    "Erfinde ein Gedicht über die Person gegenüber.",
    "Probiere, deinen Ellbogen zu lecken.",
    "Male jemandem in der Gruppe ein Bild auf die Stirn.",
    "Spiele eine Runde Luftgitarre.",
    "Tu so, als ob du im Ballett wärst.",
    "Erkläre einem Stuhl deine Liebe.",
    "Erfinde eine neue Tanzbewegung.",
    "Laufe einmal um das Haus / den Block.",
    "Stelle eine Yoga-Pose deiner Wahl vor.",
    "Rufe das letzte Restaurant an, in dem du warst, und bedanke dich für das Essen.",
    "Tue so, als wärst du ein Roboter.",
    "Trage einen Turban aus Toilettenpapier.",
    "Laufe auf allen Vieren und belle wie ein Hund.",
    "Rede eine Minute lang ohne Pause.",
    "Lass dich von der Gruppe in ein Monster verwandeln.",
    "Ziehe ein lustiges Gesicht und mache es für 2 Minuten.",
    "Imitiere eine berühmte Person.",
    "Mache einen Handstand.",
    "Lass dir von der Person links von dir die Augenbrauen zupfen.",
    "Lass jemanden einen Löffel Erdnussbutter von deiner Nase lecken.",
    "Singe das ABC rückwärts.",
    "Versuche, den Raum mit verbundenen Augen zu verlassen.",
    "Sprich eine Minute lang nur in Reimen.",
    "Nimm einen Schluck Wasser in den Mund und versuche zu singen.",
    "Mach ein Foto von dir und poste es auf Instagram.",
    "Sag drei Dinge, die du an dir selbst magst.",
    "Sag drei Dinge, die du an dir selbst ändern möchtest.",
    "Tausche die Socken mit der Person rechts neben dir.",
    "Mache einen Ententanz.",
    "Lecke einen Schuh.",
    "Schlage ein Rad.",
    "Ziehe einen BH über dein T-Shirt.",
    "Erzähle der Gruppe ein Geheimnis.",
    "Rufe jemanden an und sag ihm, dass du ihn liebst.",
    "Stell dich tot und bleibe so für die nächsten zwei Runden.",
    "Gib der Person links neben dir eine Kopfmassage.",
    "Mache den Moonwalk.",
    "Tausche die Kleidung mit der Person gegenüber.",
    "Sag jedem in der Runde ein nettes Kompliment.",
    "Versuche zu jonglieren.",
    "Mache 20 Sit-ups.",
    "Mache einen Kopfstand.",
    "Rufe einen Ex-Freund / eine Ex-Freundin an.",
    "Führe ein Lied vor, indem du Lippen-Synchronisierung machst.",
    "Zieh eine Grimasse, während du ein Lied summst.",
    "Lass jemanden im Raum dein Make-up oder deine Haare machen.",
    "Iss einen Löffel Honig oder Nutella ohne deine Hände zu benutzen.",
    "Baue einen Turm aus Gegenständen im Raum und lass ihn nicht umfallen.",
    "Lege dich für 30 Sekunden auf den Boden und tu so, als ob du schwimmst.",
    "Mache 30 Sekunden lang Hampelmann-Übungen.",
    "Erfinde eine neue Tanzbewegung und führe sie vor.",
    "Probiere, für eine Minute lang, auf einem Bein zu stehen, während du die andere Hand auf deinem Kopf hast.",
    "Tausche die Schuhe mit der Person, die dir am nächsten sitzt.",
    "Stelle ein berühmtes Kunstwerk oder eine berühmte Statue nach.",
    "Erzähle einen Witz, den du für lustig hältst.",
    "Schreibe deinen Namen auf ein Blatt Papier, aber benutze dafür deine Füße.",
    "Stelle eine berühmte Filmszene nach.",
    "Versuche, 30 Sekunden lang Hula-Hoop mit einem imaginären Reifen zu machen.",
    "Lass jemanden in der Gruppe dein Handy für eine Minute lang bedienen.",
    "Male ein Bild von einem Gruppenmitglied, ohne hinzuschauen.",
    "Versuche, für eine Minute lang mit der Zunge deinen Ellbogen zu berühren.",
    "Zähle laut bis 50, aber wechsle bei jeder Zahl die Lautstärke.",
    "Mache einen Handstand oder versuche es zumindest.",
    "Versuche, einen Text mit geschlossenen Augen zu tippen.",
    "Laufe rückwärts um den Tisch oder den Raum herum.",
    "Mache ein Selbstporträt, während du die Augen geschlossen hast.",
    "Halte eine Rede über ein zufälliges Thema, das die Gruppe auswählt.",
    "Setze eine Sonnenbrille auf und trage sie für den Rest der Runde.",
    "Versuche, eine Minute lang zu jonglieren.",
    "Verkleide dich mit Kleidungsstücken aus dem Raum, um ein neues Outfit zu kreieren."
];



// Game State Variables
let colorswitch = 0;
let select = 1;
let isDarkTheme = true;

// DOM Elements
const textElement = document.getElementById("text");
const sidebar = document.getElementById("sidebar");

// Game Configuration
const maxcolor = 1;
const mincolor = 5;
const maxwahrheit = 1;
const minwahrheit = wahrheit.length - 1;
const maxpflicht = 1;
const minpflicht = pflicht.length - 1;

// Settings Functions
function toggleSettings() {
    sidebar.classList.toggle('open');
}

function toggleTheme() {
    const toggleSwitch = document.querySelector('.toggle-switch');
    const body = document.body;
    
    isDarkTheme = !isDarkTheme;
    toggleSwitch.classList.toggle('active');
    
    if (isDarkTheme) {
        body.style.background = 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 100%)';
    } else {
        body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 25%, #667eea 50%, #764ba2 100%)';
        document.documentElement.style.setProperty('--text-primary', '#2c3e50');
        document.documentElement.style.setProperty('--text-secondary', 'rgba(44, 62, 80, 0.8)');
    }
}

// Game Button Functions
function buttonpflicht() {
    select = 2;
    clickwindow();
    
    // Add visual feedback
    const dareBtn = document.querySelector('.dare-btn');
    dareBtn.style.transform = 'translateY(-5px) scale(1.02)';
    setTimeout(() => {
        dareBtn.style.transform = '';
    }, 200);
}

function buttonwahrheit() {
    select = 1;
    clickwindow();
    
    // Add visual feedback
    const truthBtn = document.querySelector('.truth-btn');
    truthBtn.style.transform = 'translateY(-5px) scale(1.02)';
    setTimeout(() => {
        truthBtn.style.transform = '';
    }, 200);
}

// Animation Trigger Function
function triggerAnimation() {
    const element = document.getElementById('text');
    
    // Remove existing animation classes
    element.classList.remove('animate-slide-in', 'show');
    
    // Force reflow
    void element.offsetWidth;
    
    // Add animation classes
    element.classList.add('animate-slide-in', 'show');
    
    // Add floating icons animation
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
        icon.style.animation = 'none';
        setTimeout(() => {
            icon.style.animation = `floatAround 8s ease-in-out infinite ${index * 2}s`;
        }, 50);
    });
}

// Main Game Logic
function clickwindow() {
    let questionText = "";
    
    if (select == 1) {
        // Truth question
        const randomnumberwahrheit = Math.floor(Math.random() * (maxwahrheit - minwahrheit + 1)) + minwahrheit;
        questionText = wahrheit[randomnumberwahrheit];
        
        // Update floating icons for truth
        updateFloatingIcons(['🤔', '❓', '💭']);
    } else if (select == 2) {
        // Dare task
        const randomnumberpflicht = Math.floor(Math.random() * (maxpflicht - minpflicht + 1)) + minpflicht;
        questionText = pflicht[randomnumberpflicht];
        
        // Update floating icons for dare
        updateFloatingIcons(['⚡', '🎭', '🔥']);
    }
    
    // Display the question/task
    textElement.innerHTML = questionText;
    
    // Trigger animations
    triggerAnimation();
    
    // Increment color switch counter
    colorswitch++;
    
    // Change background color every 5 questions
    if (colorswitch >= 5) {
        changeBackgroundColor();
        colorswitch = 0;
    }
}

// Update floating icons
function updateFloatingIcons(icons) {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
        if (icons[index]) {
            icon.textContent = icons[index];
        }
    });
}

// Background Color Change Function
function changeBackgroundColor() {
    const body = document.body;
    const colorsrandom = Math.floor(Math.random() * (maxcolor - mincolor + 1)) + mincolor;
    
    // Remove existing background classes
    body.classList.remove('bg-purple', 'bg-pink', 'bg-yellow', 'bg-green', 'bg-blue');
    
    // Add smooth transition
    body.style.transition = 'background 1s ease-in-out';
    
    switch(colorsrandom) {
        case 1:
            body.classList.add('bg-purple');
            break;
        case 2:
            body.classList.add('bg-pink');
            break;
        case 3:
            body.classList.add('bg-yellow');
            break;
        case 4:
            body.classList.add('bg-green');
            break;
        case 5:
            body.classList.add('bg-blue');
            break;
    }
    
    // Add sparkle effect
    createSparkleEffect();
}

// Sparkle Effect for Color Changes
function createSparkleEffect() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: white;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${Math.random() * window.innerWidth}px;
                top: ${Math.random() * window.innerHeight}px;
                animation: sparkle 1s ease-out forwards;
            `;
            
            // Add sparkle animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes sparkle {
                    0% { transform: scale(0) rotate(0deg); opacity: 1; }
                    50% { transform: scale(1) rotate(180deg); opacity: 1; }
                    100% { transform: scale(0) rotate(360deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
                style.remove();
            }, 1000);
        }, i * 50);
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (sidebar.classList.contains('open') && 
            !sidebar.contains(e.target) && 
            !document.querySelector('.settings-icon').contains(e.target)) {
            toggleSettings();
        }
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'w' || e.key === 'W') {
            buttonwahrheit();
        } else if (e.key === 'p' || e.key === 'P') {
            buttonpflicht();
        } else if (e.key === 'Escape') {
            if (sidebar.classList.contains('open')) {
                toggleSettings();
            }
        }
    });
    
    // Add touch gestures for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Swipe gestures
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                buttonwahrheit(); // Swipe right for truth
            } else {
                buttonpflicht(); // Swipe left for dare
            }
        }
    });
    
    // Initialize floating icons
    updateFloatingIcons(['💭', '✨', '🎭']);
    
    // Add initial welcome message
    setTimeout(() => {
        if (!textElement.innerHTML) {
            textElement.innerHTML = "Wähle 'Wahrheit' oder 'Pflicht' um zu beginnen! 🎉<br><small>Tipp: Nutze die Tasten W und P oder wische auf dem Handy!</small>";
            textElement.classList.add('show');
        }
    }, 1000);
});

