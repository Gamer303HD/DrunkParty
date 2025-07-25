//Game Nummer 1 - Korrigierte Version
var challengeUsageCount = {
    water: 0,
    mystery: 0
};

var names = localStorage.getItem("playerNames");
var namesave = JSON.parse(names);

function load(){
    let playerkey = window.localStorage.getItem("playerCount");
    let currentPlayerElement = document.getElementById("currentPlayer");
    
    if (currentPlayerElement && playerkey) {
        currentPlayerElement.textContent = `${playerkey} Spieler bereit`;
    }
    
    console.log("Geladene Spieler:", namesave);
}

function gamer1(){
    console.log("Spiel gestartet");
    let players = parseInt(window.localStorage.getItem("playerCount"));
    
    // Aktualisiere Spielerdaten
    names = localStorage.getItem("playerNames");
    namesave = JSON.parse(names);
    
    if (!namesave || namesave.length === 0) {
        showChallenge("Keine Spieler gefunden! Bitte gehen Sie zurück und geben Sie Spielernamen ein.");
        return;
    }
    
    if (players >= 2 && players <= 99) {
        console.log("Spiel wird gestartet mit", players, "Spielern"); 
        random_number(players);
    } else {
        showChallenge("Ungültige Spieleranzahl. Bitte 2-99 Spieler auswählen.");
    }
}

async function random_number(players) {
    console.log("Verfügbare Spieler:", namesave);
    
    let currentPlayerElement = document.getElementById("currentPlayer");
    let spinningNumberElement = document.getElementById("spinningNumber");
    let spinButton = document.getElementById("spinButton");
    
    if (!currentPlayerElement || !spinButton) {
        console.error("UI Elemente nicht gefunden");
        return;
    }
    
    // Animation starten
    currentPlayerElement.style.display = "none";
    if (spinningNumberElement) {
        spinningNumberElement.style.display = "block";
    }
    spinButton.disabled = true;
    spinButton.textContent = "Wähle aus...";
    
    var selectedPlayerIndex;
    var colorIndex = 0;
    
    // Farbwerte für Animation
    const colors = [
        "#bc12dd", // Lila
        "#dd124d", // Rot
        "#12ddc3", // Cyan
        "#35dd12", // Grün
        "#dddb12", // Gelb
        "#dd7f12"  // Orange
    ];
    
    // Spinning Animation - 100 Durchläufe
    for(let i = 0; i < 100; i++){
        selectedPlayerIndex = Math.floor(Math.random() * players);
        
        if (spinningNumberElement) {
            spinningNumberElement.innerText = selectedPlayerIndex + 1;
            spinningNumberElement.style.color = colors[colorIndex];
        }
        
        // Auch andere Elemente einfärben
        if (currentPlayerElement) {
            currentPlayerElement.style.color = colors[colorIndex];
        }
        if (spinButton) {
            spinButton.style.borderColor = colors[colorIndex];
        }
        
        colorIndex = (colorIndex + 1) % colors.length;
        
        // Warten für Animation
        await new Promise(resolve => setTimeout(resolve, 25));
    }
    
    // Animation beenden
    if (spinningNumberElement) {
        spinningNumberElement.style.display = "none";
    }
    currentPlayerElement.style.display = "flex";
    
    // Finaler ausgewählter Spieler
    var selectedPlayer = namesave[selectedPlayerIndex];
    currentPlayerElement.textContent = selectedPlayer;
    
    // Zweiten Spieler für Challenges auswählen (falls nötig)
    var secondPlayerIndex;
    do {
        secondPlayerIndex = Math.floor(Math.random() * players);
    } while (secondPlayerIndex === selectedPlayerIndex && players > 1);
    
    var secondPlayer = namesave[secondPlayerIndex];
    
    // Challenge generieren
    generateChallenge(selectedPlayer, secondPlayer, players);
    
    // Button wieder aktivieren
    spinButton.disabled = false;
    spinButton.textContent = "🎲 Spieler wählen";
}

function generateChallenge(selectedPlayer, secondPlayer, totalPlayers) {
    var challengeNumber = Math.floor(Math.random() * 16) + 1;
    var drinkAmount = Math.floor(Math.random() * 3) + 1; // 1-3
    var drinkType = Math.random() > 0.5 ? "Schlücke" : "Shots";
    
    if (drinkAmount === 1) {
        drinkType = drinkType === "Schlücke" ? "Schluck" : "Shot";
    }
    
    var challengeText = "";
    
    switch(challengeNumber) {
        case 1:
            challengeText = `Spieler ${selectedPlayer}: Verteile ${drinkAmount} ${drinkType}!`;
            break;
        case 2:
            challengeText = `Spieler ${selectedPlayer}: Trinke einen Shot mit ${secondPlayer}!`;
            break;
        case 3:
            challengeText = `Spieler ${selectedPlayer}: Mache Armdrücken gegen ${secondPlayer}! Der Verlierer trinkt ${drinkAmount} ${drinkType}!`;
            break;
        case 4:
            challengeText = `Spieler ${selectedPlayer}: Mache einen Handstand! Schaffst du es nicht, trinkst du ${drinkAmount} ${drinkType}!`;
            break;
        case 5:
            if (challengeUsageCount.water < 2) {
                challengeText = `Spieler ${selectedPlayer}: Trinke ein Wasser - du brauchst es wahrscheinlich!`;
                challengeUsageCount.water++;
            } else {
                challengeText = `Spieler ${selectedPlayer}: Du trinkst ${drinkAmount} ${drinkType}!`;
            }
            break;
        case 6:
            challengeText = `Spieler ${selectedPlayer}: Wenn dein Name mit einem Vokal endet, trinke zwei!`;
            break;
        case 7:
            challengeText = `Spieler ${selectedPlayer}: Leere das Glas von ${secondPlayer}!`;
            break;
        case 8:
            challengeText = `Spieler ${selectedPlayer}: Singe ein Lied oder trinke ${drinkAmount} ${drinkType}!`;
            break;
        case 9:
            if (challengeUsageCount.mystery < 2) {
                challengeText = `Spieler ${selectedPlayer}: Mystery Shot! Deine Mitspieler mischen dir einen Shot aus beliebigen Getränken!`;
                challengeUsageCount.mystery++;
            } else {
                challengeText = `Spieler ${selectedPlayer}: Du trinkst ${drinkAmount} ${drinkType}!`;
            }
            break;
        case 10:
            challengeText = `Spieler ${selectedPlayer}: Du trinkst ${drinkAmount} ${drinkType}!`;
            break;
        case 11:
            challengeText = `Spieler ${selectedPlayer}: Tausche dein Getränk mit der Person mit dem vollsten Glas!`;
            break;
        case 12:
            challengeText = `Spieler ${selectedPlayer}: Verteile 2 ${drinkType}!`;
            break;
        case 13:
            challengeText = `Spieler ${selectedPlayer}: Tausche dein Getränk mit ${secondPlayer}!`;
            break;
        case 14:
            challengeText = `Spieler ${selectedPlayer}: Mische ${secondPlayer} einen starken Drink zusammen!`;
            break;
        case 15:
            challengeText = `Spieler ${selectedPlayer}: Tausche deinen Namen mit ${secondPlayer}! Wer den Namen falsch sagt, trinkt!`;
            break;
        case 16:
            challengeText = `Hat Spieler ${selectedPlayer} einen Freund oder eine Freundin? Dann trinke!`;
            break;
        default:
            challengeText = `Spieler ${selectedPlayer}: Du trinkst ${drinkAmount} ${drinkType}!`;
    }
    
    showChallenge(challengeText);
}

function showChallenge(text) {
    const modal = document.getElementById('challengeModal');
    const challengeText = document.getElementById('challengeText');
    
    if (modal && challengeText) {
        challengeText.textContent = text;
        modal.style.display = 'flex';
    } else {
        // Fallback zu alert wenn Modal nicht existiert
        alert(text);
    }
}

function closeModal() {
    const modal = document.getElementById('challengeModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Beim Laden der Seite initialisieren
window.addEventListener('load', load);