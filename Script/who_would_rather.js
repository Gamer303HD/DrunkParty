var list = 0;
var Selectquestion = 1;
var colorswitch = 0;
var textmessage = document.getElementById("text");
var numbers = document.getElementById("numbers");
var maxcolor = 5;
var mincolor = 1;
var maxlist = 56;
var minlist = 0; // Adjusted to fit array index

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const text = "Press Me To Begin";
    const speed = 50; // Animation speed in milliseconds

    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
    }

    typeText();
});
document.body.style.backgroundColor = "rgb(109 107 139)";

function triggerAnimation() {
    var element = document.getElementById('text');
    element.classList.remove('animate-slide-in');
    void element.offsetWidth; // Trigger a reflow to reset the animation
    element.classList.add('animate-slide-in');
    // Define the keyframes and animation directly in JavaScript
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
        @keyframes slideInFromTop {
            from {
                opacity: 0;
                transform: translateY(-100px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        #text.animate-slide-in {
            animation: slideInFromTop 0.5s forwards;
        }
    `;
    document.head.appendChild(styleSheet);

    // Add the class that triggers the animation
    element.classList.add('animate-slide-in');
}

function clickwindow() {
    if (fragen.length > 0) {
        Selectquestion = Math.floor(Math.random() * fragen.length);
        textmessage.innerHTML = fragen[Selectquestion];
        fragen.splice(Selectquestion, 1); // Remove the selected question from the array

        colorswitch += 1;
        triggerAnimation();
        numbers.innerHTML = (`${Selectquestion + 1} | ${list}`);

        if (colorswitch == 5) {
            var colorsrandom = Math.floor(Math.random() * (maxcolor - mincolor + 1)) + mincolor;
            if (colorsrandom == 1) {
                document.body.style.backgroundColor = "#7f12dd";
            } else if (colorsrandom == 2) {
                document.body.style.backgroundColor = "#dd124d";
            } else if (colorsrandom == 3) {
                document.body.style.backgroundColor = "#ddc012";
            } else if (colorsrandom == 4) {
                document.body.style.backgroundColor = "#12dd5d";
            } else if (colorsrandom == 5) {
                document.body.style.backgroundColor = "#1272dd";
            }
            colorswitch = 0;
        }
    } else {
        textmessage.innerHTML = "Keine Fragen mehr verfügbar!";
        numbers.innerHTML = "0 | " + list;
    }
}

const fragen = [
    "Wer würde eher etwas im Kiosk klauen?",
    "Wer würde eher einen Fallschirmsprung aus 4000 Metern Höhe wagen?",
    "Wer würde eher auf einer einsamen Insel überleben?",
    "Wer würde eher in der Öffentlichkeit singen und tanzen?",
    "Wer würde eher in einer Reality-TV-Show mitmachen?",
    "Wer würde eher einen Geburtstag vergessen?",
    "Wer würde eher furzen und es auf jemand anderes schieben?",
    "Wer würde eher verhungern, als selbst zu kochen?",
    "Wer würde eher eine Woche lang ohne Toilettenpapier auskommen?",
    "Wer würde eher eine Woche ohne Dusche auskommen?",
    "Wer würde eher Drogen nehmen?",
    "Wer würde eher Nacktbilder verschicken?",
    "Wer würde eher Veganer werden?",
    "Wer würde eher sein Geld in der Spielothek verzocken?",
    "Wer würde eher in die Politik gehen?",
    "Wer würde eher einen Prominenten heiraten?",
    "Wer würde eher einen Pornofilm ansehen?",
    "Wer würde eher im Zirkus auftreten?",
    "Wer würde eher von der Polizei verhaftet werden?",
    "Wer würde eher drei Tage ohne Schlaf auskommen?",
    "Wer würde eher Kleidung aus dem Schrank des anderen klauen?",
    "Wer würde morgens eher verschlafen?",
    "Wer würde eher vor den Eltern lügen?",
    "Wer würde eher den anderen verpetzen?",
    "Wer würde dem anderen eine Überraschung vorbereiten?",
    "Wer würde eher das Fernsehprogramm bestimmen?",
    "Wer würde eher im Auto vorne sitzen?",
    "Wer würde eher sein Zimmer verwüsten?",
    "Wer würde eher den anderen trösten?",
    "Wer würde eher das Essen zubereiten, wenn die Eltern nicht da sind?",
    "Wer würde eher auf Make-up verzichten?",
    "Wer würde eher zweimal die gleiche Unterhose tragen?",
    "Wer würde eher ein guter Geheimagent sein?",
    "Wer würde eher bei einer Dating-Show mitmachen?",
    "Wer würde eher in der Wildnis überleben?",
    "Wer würde eher über den anderen lästern?",
    "Wer würde eher ein Treffen absagen, um die Zeit mit dem Partner zu verbringen?",
    "Wer würde eher ein Auto zu Schrott fahren?",
    "Wer würde eher einen Zeichentrickfilm schauen?",
    "Wer würde eher eine Bank ausrauben?",
    "Wer würde eher einen Bungee-Sprung machen?",
    "Wer würde eher in einer Karaoke-Bar singen?",
    "Wer würde eher aus einem Escape-Room entkommen?",
    "Wer würde eher den gemeinsamen Urlaub planen?",
    "Wer würde eher ein Geheimnis des anderen für sich behalten?",
    "Wer würde eher einen Fremden küssen?",
    "Wer würde eher mit dem besten Freund einen Mord vertuschen?",
    "Wer würde eher das Gesicht des besten Freundes als Tattoo stechen lassen?",
    "Wer würde eher allein ins Kino gehen?",
    "Wer würde eher berühmt werden?",
    "Wer würde eher wieder mit seinem Ex zusammenkommen?",
    "Wer würde eher einen Dreier mit zwei Freunden haben?",
    "Wer würde eher in einer offenen Beziehung leben?",
    "Wer würde eher einen Swingerclub besuchen?",
    "Wer würde eher eine Schönheits-OP machen?",
    "Wer würde eher jemanden heiraten, nur weil er reich ist?"
];

console.log(fragen);
for (let i = 0; i < fragen.length; i++) {
    console.log(fragen[i]);
    list = list + 1;
}
