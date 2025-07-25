// Checkbox-Element ausw�hlen
const checkbox = document.querySelector('.switch input');

// Theme aus localStorage abrufen
var change = window.localStorage.getItem("theme");
var modeset = document.getElementById("modeset");

// Theme und Schalter beim Laden der Seite initialisieren
if (change == 1) {
    darkhub();
    checkbox.checked = true; // Checkbox auf "an" setzen
} else if (change == 2) {
    normaltheme();
    checkbox.checked = false; // Checkbox auf "aus" setzen
}

// Event-Listener f�r den Schalter hinzuf�gen
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        darkhub();
        window.localStorage.setItem("theme", 1); // Darkhub-Theme speichern
    } else {
        normaltheme();
        window.localStorage.setItem("theme", 2); // Normal-Theme speichern
    }
});

// Funktion f�r Darkhub-Theme
function darkhub() {
    console.log('Switch is On');
    modeset.innerHTML = "Darkhub";
    document.body.style.backgroundColor = '#101010';
    document.getElementById("partygame4").style.background = "linear-gradient(0deg, #ff9000 25%, #ff9000 26%)";
    document.getElementById("partygame3").style.background = 'linear-gradient(0deg, #ff9000 25%, #ff9000 26%)';
    document.getElementById("partygame2").style.background = 'linear-gradient(0deg, #ff9000 25%, #ff9000 26%)';
    document.getElementById("partygame1").style.background = 'linear-gradient(0deg, #ff9000 25%, #ff9000 26%)';
    document.getElementById("news").style.color = '#ff9000';
    document.getElementById("impressum").style.color = '#ff9000';
    document.getElementById("online-count").style.color = '#ff9000';
    document.getElementById("nummernfenster").style.backgroundColor = '#ff9000';
    document.getElementById("ok-button").style.backgroundColor = '#ff9000';
    document.getElementById("eingabe").style.color = 'rgb(0,0,0);';

    // Titel anpassen
    const maintitle = document.getElementById('maintitle');
    const text = maintitle.textContent;
    const [drunkText, partyText] = text.split(' ');
    maintitle.innerHTML = `
        <span class="highlight" style="-webkit-background-clip: text;
        text-align: center;
        align-items: center;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 180px;
        font-weight: bold;
        font: bold;
        background-image: url(https://media2.giphy.com/media/HkEDr0jVekaZO/giphy.gif?cid=790b76115151ed408a9cae4539eb6351baba5d85998ab783&ct=g&rid=giphy.gif);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        color: transparent;">${drunkText}</span>
        <span class="highlight" style="background-color: #ff9000; color: #000000; padding: 0.2em 0.1em; border-radius: 20px;;">${partyText}</span>`;
}

// Funktion f�r Normal-Theme
function normaltheme() {
    modeset.innerHTML = "Normal";
    console.log('Switch is OFF');
    document.body.style.backgroundColor = '#333333';
    document.getElementById("partygame4").style.background = "linear-gradient(0deg, rgba(255,255,255,1) 25%, rgb(247, 66, 66) 26%)";
    document.getElementById("partygame3").style.background = 'linear-gradient(0deg, rgba(255,255,255,1) 25%, #ce7a7a 26%)';
    document.getElementById("partygame2").style.background = 'linear-gradient(0deg, rgba(255,255,255,1) 25%, #a0d4dd 26%)';
    document.getElementById("partygame1").style.background = 'linear-gradient(0deg, rgba(255,255,255,1) 25%, rgb(255, 120, 248) 26%)';
    document.getElementById("ok-button").style.backgroundColor = '#ddb98';
    document.getElementById("eingabe").style.color = '#ddb98';
    document.getElementById("news").style.color = 'rgba(255, 255, 255, 0.836)';
    document.getElementById("impressum").style.color = 'rgba(255, 255, 255, 0.836)';
    document.getElementById("online-count").style.color = 'rgba(255, 255, 255, 0.836)';
    document.getElementById("nummernfenster").style.backgroundColor = '#a389dd';
    document.getElementById("ok-button").style.backgroundColor = '#a389dd';
    document.getElementById("eingabe").style.color = 'rgb(0, 0, 0)';

    resetStyles();
}

// Funktion f�r das Zur�cksetzen der Titelstile
function resetStyles() {
    const maintitle = document.getElementById('maintitle');
    maintitle.innerHTML = 'Drunk Party';
    maintitle.style.color = ''; // Farbe auf Standard zur�cksetzen
}
