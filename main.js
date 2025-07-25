// Global variables
let playerNames = [];
let currentStep = 'playerCount';

// Initialize page
window.onload = function() {
    checkAgeConfirmation();
    loadTheme();
    loadPlayerData();
    initializeParticles();
    setupEventListeners();
};

// Age confirmation functions
function checkAgeConfirmation() {
    const ageConfirmed = localStorage.getItem('ageConfirmed');
    if (ageConfirmed === '1') {
        document.getElementById('ageModal').style.display = 'none';
    }
}

function acceptAge() {
    document.getElementById('ageModal').style.display = 'none';
    localStorage.setItem('ageConfirmed', '1');
}

function declineAge() {
    alert('Sie müssen mindestens 18 Jahre alt sein, um diese Seite zu besuchen.');
    window.location.href = 'https://www.google.com';
}

// Theme functions - KORRIGIERT
function loadTheme() {
    const theme = localStorage.getItem('theme') || 'dark';
    const toggle = document.getElementById('themeToggle');
    
    if (theme === 'light') {
        toggle.classList.add('active');
        applyLightTheme();
    } else {
        toggle.classList.remove('active');
        applyDarkTheme();
    }
}

function toggleTheme() {
    const toggle = document.getElementById('themeToggle');
    toggle.classList.toggle('active');
    
    if (toggle.classList.contains('active')) {
        localStorage.setItem('theme', 'light');
        applyLightTheme();
        showNotification('Light Mode aktiviert! ☀️', 'success');
    } else {
        localStorage.setItem('theme', 'dark');
        applyDarkTheme();
        showNotification('Dark Mode aktiviert! 🌙', 'info');
    }
}

function applyLightTheme() {
    const root = document.documentElement;

    // CSS Custom Properties – Light Theme
    root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.25)');
    root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.5)');
    root.style.setProperty('--text-primary', '#1a1a2e');
    root.style.setProperty('--text-secondary', 'rgba(26, 26, 46, 0.8)');
    root.style.setProperty('--shadow-glow', '0 8px 32px rgba(0, 0, 0, 0.1)');
    root.style.setProperty('--shadow-hover', '0 15px 35px rgba(0, 0, 0, 0.2)');

    // Fallbacks für iOS/Safari
    root.style.setProperty('--glass-bg-webkit', 'rgba(255, 255, 255, 0.25)');

    // Body Background
    const lightGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)';
    document.body.style.background = lightGradient;

    // Optional: Support für :before/:after Pseudo-Element
    updateBodyBackground(lightGradient);

    // Partikel für Light Theme
    updateParticleColors('rgba(255, 255, 255, 0.3)');
}

function applyDarkTheme() {
    const root = document.documentElement;

    // CSS Custom Properties – Dark Theme
    root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.1)');
    root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.2)');
    root.style.setProperty('--text-primary', '#ffffff');
    root.style.setProperty('--text-secondary', 'rgba(255, 255, 255, 0.8)');
    root.style.setProperty('--shadow-glow', '0 8px 32px rgba(31, 38, 135, 0.37)');
    root.style.setProperty('--shadow-hover', '0 15px 35px rgba(31, 38, 135, 0.5)');

    // Fallbacks für iOS/Safari
    root.style.setProperty('--glass-bg-webkit', 'rgba(255, 255, 255, 0.1)');

    // Body Background
    const darkGradient = 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 100%)';
    document.body.style.background = darkGradient;

    updateBodyBackground(darkGradient);

    // Partikel für Dark Theme
    updateParticleColors('rgba(255, 255, 255, 0.1)');
}


// Hilfsfunktion für Body Background Update
function updateBodyBackground(gradient) {
    // Dynamisches CSS für ::before Pseudo-Element erstellen
    let styleSheet = document.getElementById('dynamic-theme-styles');
    if (!styleSheet) {
        styleSheet = document.createElement('style');
        styleSheet.id = 'dynamic-theme-styles';
        document.head.appendChild(styleSheet);
    }
    
    styleSheet.textContent = `
        body::before {
            background: ${gradient} !important;
        }
        body.boom-game.exploded::before {
            background: linear-gradient(135deg, #ff4757 0%, #c44569 50%, #2c2c54 100%) !important;
        }
    `;
}

// Hilfsfunktion für Partikel-Farben
function updateParticleColors(color) {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        particle.style.background = color;
    });
}

// Sidebar functions
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
    
    // Body scroll lock when sidebar is open
    if (sidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Player input handling
function handlePlayerInput() {
    const playerCountInput = document.getElementById('playerCount');
    const playerCount = parseInt(playerCountInput.value);
    const nameInputsDiv = document.getElementById('nameInputs');
    const startBtn = document.querySelector('.start-btn');

    if (currentStep === 'playerCount') {
        if (playerCount >= 2 && playerCount <= 99) {
            createNameInputs(playerCount, nameInputsDiv);
            nameInputsDiv.classList.remove('hidden');
            startBtn.textContent = 'Spiel starten';
            currentStep = 'names';
            playerCountInput.disabled = true;
            showNotification(`${playerCount} Spieler eingegeben! Namen eingeben (optional)`, 'success');
        } else {
            showNotification('Bitte geben Sie eine Zahl zwischen 2 und 99 ein.', 'error');
        }
    } else if (currentStep === 'names') {
        collectPlayerNames(playerCount);
        savePlayerData(playerCount);
        showGames();
        showNotification('Spieler gespeichert! Wählen Sie ein Spiel aus.', 'success');
    }
}

function createNameInputs(playerCount, container) {
    container.innerHTML = '';
    for (let i = 1; i <= playerCount; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'name-input';
        input.placeholder = `Spieler ${i} Name (optional)`;
        input.id = `player${i}`;
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handlePlayerInput();
            }
        });
        
        // Animation für Input-Felder
        input.style.opacity = '0';
        input.style.transform = 'translateY(20px)';
        setTimeout(() => {
            input.style.transition = 'all 0.3s ease';
            input.style.opacity = '1';
            input.style.transform = 'translateY(0)';
        }, i * 100);
        
        container.appendChild(input);
    }
}

function collectPlayerNames(playerCount) {
    playerNames = [];
    for (let i = 1; i <= playerCount; i++) {
        const nameInput = document.getElementById(`player${i}`);
        const name = nameInput.value.trim() || `Spieler ${i}`;
        playerNames.push(name);
    }
}

function savePlayerData(playerCount) {
    localStorage.setItem('playerCount', playerCount);
    localStorage.setItem('playerNames', JSON.stringify(playerNames));
}

function showGames() {
    document.getElementById('playerInput').style.display = 'none';
    document.getElementById('gamesContainer').classList.remove('hidden');
    
    // Add entrance animation
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

function loadPlayerData() {
    const playerCount = localStorage.getItem('playerCount');
    const savedNames = localStorage.getItem('playerNames');
    
    if (playerCount && parseInt(playerCount) >= 2) {
        if (savedNames) {
            playerNames = JSON.parse(savedNames);
        }
        showGames();
    }
}

function resetGame() {
    if (confirm('Möchten Sie wirklich alle Spielerdaten zurücksetzen?')) {
        localStorage.removeItem('playerCount');
        localStorage.removeItem('playerNames');
        localStorage.removeItem('tempPlayerNames');
        showNotification('Alle Daten zurückgesetzt!', 'info');
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
}

// Game navigation
function navigateToGame(gameType) {
    // Add click animation
    if (event && event.currentTarget) {
        event.currentTarget.style.transform = 'scale(0.95)';
        setTimeout(() => {
            event.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
        }, 150);
    }
    
    // Navigate based on game type
    setTimeout(() => {
        switch(gameType) {
            case 'random':
                window.location.href = 'Site/random_player/random_palyer.html';
                break;
            case 'bottle':
                window.location.href = 'Site/rotate_the_bottle/rotate_the_bottle.html';
                break;
            case 'truth':
                window.location.href = 'selectgui/select_wwop_gui/wwop_gui.html';
                break;
            case 'boom':
                window.location.href = 'Site/boom_game/boom_game.html';
                break;
            default:
                console.log('Unknown game type:', gameType);
        }
    }, 300);
}

// Particle system - VERBESSERT
function initializeParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
    });
    
    // Start generating random particles
    setInterval(createRandomParticle, 3000);
}

function createRandomParticle() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = Math.random() * 6 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (4 + Math.random() * 4) + 's';
    
    // Theme-abhängige Farbe
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        particle.style.background = 'rgba(255, 255, 255, 0.3)';
    } else {
        particle.style.background = 'rgba(255, 255, 255, 0.1)';
    }
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 8000);
}

// Event listeners setup - ERWEITERT
function setupEventListeners() {
    // Add hover effects to game cards
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 40px rgba(79, 172, 254, 0.4)';
            this.style.borderColor = 'rgba(79, 172, 254, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'var(--shadow-glow)';
            this.style.borderColor = 'var(--glass-border)';
        });
        
        // Touch support für mobile
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
    });

    // Add focus effects to inputs
    const inputs = document.querySelectorAll('input[type="number"], input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.background = 'rgba(79, 172, 254, 0.2)';
            this.style.borderColor = '#4facfe';
            this.style.boxShadow = '0 0 20px rgba(79, 172, 254, 0.3)';
        });
        
        input.addEventListener('blur', function() {
            this.style.background = 'var(--glass-bg)';
            this.style.borderColor = 'var(--glass-border)';
            this.style.boxShadow = 'none';
        });
    });

    // Add parallax effect to title
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const title = document.querySelector('.main-title');
                if (title) {
                    title.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Keyboard shortcuts - ERWEITERT
document.addEventListener('keydown', function(e) {
    // Press 'R' to reset
    if (e.key.toLowerCase() === 'r' && e.ctrlKey) {
        e.preventDefault();
        resetGame();
    }
    
    // Press 'S' to open settings
    if (e.key.toLowerCase() === 's' && e.ctrlKey) {
        e.preventDefault();
        toggleSidebar();
    }
    
    // Press 'T' to toggle theme
    if (e.key.toLowerCase() === 't' && e.ctrlKey) {
        e.preventDefault();
        toggleTheme();
    }
    
    // Press ESC to close sidebar
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    }
    
    // Press Enter in player count input
    if (e.key === 'Enter' && e.target && e.target.id === 'playerCount') {
        handlePlayerInput();
    }
    
    // Press Enter in name inputs
    if (e.key === 'Enter' && e.target && e.target.classList.contains('name-input')) {
        handlePlayerInput();
    }
});

// Loading animation - VERBESSERT
window.addEventListener('load', function() {
    const title = document.querySelector('.main-title');
    const playerInput = document.querySelector('.player-input');
    const cards = document.querySelectorAll('.game-card');
    
    // Initial state
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'translateY(-50px)';
    }
    
    if (playerInput) {
        playerInput.style.opacity = '0';
        playerInput.style.transform = 'translateY(30px)';
    }
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
    });
    
    // Stagger animations
    setTimeout(() => {
        if (title) {
            title.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }
    }, 200);
    
    setTimeout(() => {
        if (playerInput) {
            playerInput.style.transition = 'all 0.6s ease';
            playerInput.style.opacity = '1';
            playerInput.style.transform = 'translateY(0)';
        }
    }, 400);
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 600 + (index * 100));
    });
});

// Online counter with random fluctuation - VERBESSERT
function updateOnlineCounter() {
    const counter = document.getElementById('onlineCount');
    if (counter) {
        const baseCount = 240;
        const fluctuation = Math.floor(Math.random() * 30) - 15;
        const newCount = Math.max(baseCount + fluctuation, 180);
        counter.innerHTML = `🟢 Online: <span style="color: #4facfe; font-weight: 700;">${newCount}</span> Spieler`;
    }
}

// Update counter every 25 seconds
setInterval(updateOnlineCounter, 25000);

// Notification system - VERBESSERT
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Icon basierend auf Type
    let icon = '💬';
    switch(type) {
        case 'error': icon = '❌'; break;
        case 'success': icon = '✅'; break;
        case 'info': icon = 'ℹ️'; break;
    }
    
    notification.innerHTML = `<span class="notification-icon">${icon}</span><span class="notification-text">${message}</span>`;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 15px;
        color: white;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        z-index: 9999;
        transform: translateX(400px);
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 350px;
        ${type === 'error' ? 'background: linear-gradient(135deg, rgba(255, 71, 87, 0.9), rgba(196, 69, 105, 0.9));' : 
          type === 'success' ? 'background: linear-gradient(135deg, rgba(79, 172, 254, 0.9), rgba(0, 242, 254, 0.9));' :
          'background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));'}
    `;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Slide out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

// Easter egg - Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Easter egg activated!
        document.body.style.filter = 'hue-rotate(180deg) saturate(2)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 3000);
        
        showNotification('🎉 Konami Code aktiviert! Party Mode! 🎉', 'success');
        
        // Add special particle burst
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createRandomParticle(), i * 100);
        }
        
        konamiCode = [];
    }
});

// Touch gestures for mobile - VERBESSERT
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', function(e) {
    if (!touchStartX || !touchStartY) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Swipe right to open sidebar
    if (Math.abs(diffX) > Math.abs(diffY) && diffX < -80) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && !sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    }
    
    // Swipe left to close sidebar
    if (Math.abs(diffX) > Math.abs(diffY) && diffX > 80) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    }
    
    touchStartX = 0;
    touchStartY = 0;
}, { passive: true });

// Performance optimization - reduce particles on mobile
if (window.innerWidth <= 768) {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        if (index > 4) {
            particle.remove();
        }
    });
}

// Auto-save player names as user types - VERBESSERT
function setupAutoSave() {
    document.addEventListener('input', function(e) {
        if (e.target.classList.contains('name-input')) {
            const tempNames = [];
            const nameInputs = document.querySelectorAll('.name-input');
            nameInputs.forEach((input, index) => {
                tempNames[index] = input.value.trim() || `Spieler ${index + 1}`;
            });
            localStorage.setItem('tempPlayerNames', JSON.stringify(tempNames));
        }
    });
}

// Theme transition effect
function addThemeTransition() {
    document.body.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 500);
}

// Initialize auto-save
setupAutoSave();

// Initialize online counter on load
updateOnlineCounter();

// Prevent context menu on long press (mobile)
document.addEventListener('contextmenu', function(e) {
    if (e.target.classList.contains('game-card') || 
        e.target.classList.contains('main-title') ||
        e.target.classList.contains('settings-icon')) {
        e.preventDefault();
    }
});

// Add visual feedback for theme toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', addThemeTransition);
    }
});