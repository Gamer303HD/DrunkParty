document.getElementById('startButton').addEventListener('click', startGame);
document.body.style.backgroundColor = "#333333";
a = 0;


const categories = ['Sport Arten', 'Musik Künstler', 'Filme', 'Bücher', 'Musikinstrumente', 'Automarken', 'Städte', 'Länder', 'Süßigkeiten', 'Getränke', 'Tiere', 'TV-Serien', 'Planeten', 'Krankheiten', 'Werkzeuge', 'Videospiele', 'Spielkonsolen', 'Biersorten', 'Ballsportarten', 'Soziale Netzwerke' ,'Betriebssysteme', 'Online-Shops', 'YouTuber'];




function startGame() {
    document.getElementById("startButton1").style.display = 'block';
    document.getElementById("startButton").style.display = 'none';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById("category").style.display = 'block';
    const category = categories[Math.floor(Math.random() * categories.length)];
    document.getElementById('category').textContent = ` ${category}`;
    document.getElementById('category').classList.remove('hidden');
    document.getElementById("startButton1").style.visibility = 'hidden';


    const bombElement = document.getElementById('bomb');
    bombElement.classList.add('pulse');
    document.getElementById("startButton1").style.display = 'block';
    document.getElementById("startButton1").style.visibility = 'visible';
    const time = Math.floor(Math.random() * 45) + 90;
    let countdown = time;
    document.getElementById('timer').classList.remove('hidden');
    //document.getElementById('timer').textContent = `Zeit: ${countdown}s`;

    const interval = setInterval(() => {
        countdown--;
        //document.getElementById('timer').textContent = `Zeit: ${countdown}s`;

        if (countdown <= 0) {
            clearInterval(interval);
            explodeBomb();
        }
    }, 1000);
}

function explodeBomb() {
    const bombElement = document.getElementById('bomb');
    bombElement.classList.remove('pulse');
    bombElement.style.display = 'none';

    document.body.style.backgroundColor = "#ed2424";
    document.getElementById("category").innerHTML = "Verloren";
    document.getElementById("startButton1").style.marginBottom = "100%";
    var element = document.getElementById("maintitle1");
    element.remove();
    bombElement.remove();


}
