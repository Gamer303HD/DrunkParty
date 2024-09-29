var game1 = document.getElementById("partygame1");
var game2 = document.getElementById("partygame2");
var game3 = document.getElementById("partygame3");
var game4 = document.getElementById("partygame4");
var coming_of_age = document.getElementById("ageConfirmation");
var themeswitcher = document.getElementsByClassName('switch');
var sidebar = document.getElementById('icon');
var reset = 1;
var b = 1;
var eingabeElement = document.getElementById("eingabe");
var close = document.getElementById("nummernfenster");
var inputFelder = []; // Array für Input-Felder
var newFelder = [];


game1.style.display = "none";
game2.style.display = "none";
game3.style.display = "none";
game4.style.display = "none";
sidebar.style.display = "none";

coming_of_age.style.visibility = "hidden";




let popupdone = window.localStorage.getItem("popup");
if(popupdone == 1){
    var popups = document.getElementById("ageConfirmation")
    popups.remove();
}

//popup ich bin älter als 18
function showAgeConfirmation() {
    document.getElementById('ageConfirmation').style.display = 'flex';
}

function acceptAge() {
    document.getElementById('ageConfirmation').style.display = 'none';
    window.localStorage.setItem("popup", 1);
}

function declineAge() {
    alert('Sie müssen mindestens 18 Jahre alt sein, um diese Seite zu besuchen.');
    window.location.href = 'https://www.google.com'; 
}

// slider main
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    var icon = document.querySelector('.icon');
    icon.classList.toggle('rotate'); 
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var icon = document.querySelector('.icon');
    icon.classList.toggle('rotate'); 
  }

//  key playerCounterKey
let playerkey = window.localStorage.getItem("playerCounterKey");

if(playerkey >= 2 && playerkey <= 99){
    close.style.display = "none";
    game1.style.display = "block";
    game2.style.display = "block";
    game3.style.display = "block";
    game4.style.display = "block";
    sidebar.style.display = "block";
    coming_of_age.style.visibility = "hidden";



   
}else{
    close.style.display = "block";
    game1.style.display = "none";
    game2.style.display = "none";
    game3.style.display = "none";
    game4.style.display = "none";
    sidebar.style.display = "none";
    coming_of_age.style.visibility = "visible";}

function resetsaves(){
    window.localStorage.setItem("playerCounterKey", 0);
    localStorage.setItem("namesaver", 0);
    location.reload();
}


function schließeFenster(cookies) {
    let game1 = document.getElementById("partygame1");
    let game2 = document.getElementById("partygame2");
    let game3 = document.getElementById("partygame3");
    let game4 = document.getElementById("partygame4");
    var close = document.getElementById("nummernfenster");
    var eingabeElement = document.getElementById("eingabe");
    var eingabeWert = parseInt(eingabeElement.value);
    var playercounter = document.getElementById("eingabe").value;
    window.localStorage.setItem("playerCounterKey", playercounter);
    savebrowser();
    createplayerbyname();


}

function savebrowser(){
    console.log("saved");
}

function updateOnlineUsersCount() {
    fetch('/api/online-users')
        .then(response => response.json())
        .then(data => {
            document.getElementById('onlineUsersCount').innerText = data.count;
        })
        .catch(error => console.error('Error fetching online users count:', error));
}

// Aktualisiere die Benutzeranzahl alle 5 Sekunden
setInterval(updateOnlineUsersCount, 40 * 1000);

// Initiales Update
updateOnlineUsersCount();



function createplayerbyname(){
    var playerkey = document.getElementById("eingabe").value;
    var container = document.getElementById("input-container");
    var ok = document.getElementById("ok-button");

    container.style.display = "display";
    let counter = 0;
    
    
    
    if(reset == 1){
            while (counter < playerkey) {
                // Input-Feld erstellen
                var inputFeld = document.createElement("input");
                inputFeld.type = "text";
                inputFeld.style.backgroundColor = "transparent";
                inputFeld.style.width = "700px";
                inputFeld.style.height = "120px";
                inputFeld.style.fontSize = "80px"
                inputFeld.style.textAlign = "center";
                inputFeld.style.paddingTop = "20px";
                inputFeld.style.borderColor = "rgb(255, 90, 90);";
                inputFeld.style.paddingBottom = "20px";
                inputFeld.style.backgroundColor = "transparent";
                inputFeld.placeholder = "Player: " + (counter + 1);
                inputFeld.id = (counter + 1);
                container.appendChild(inputFeld);
                // Input-Feld zum Array hinzufügen
                inputFelder.push(inputFeld);
                counter++;
            } 
            console.log(inputFelder);
            reset = 2;

            var meinTextfeld = document.getElementById("eingabe");
            meinTextfeld.onkeydown = function(event) {
                event.preventDefault();
            };
            ok.innerText = "Select";
    }else if(reset == 2){
        b = 2;
        d = 1;
        //Spieler name plus liste überprüfen
        var anzahlarrayname = inputFelder.length;
        for(c = 1; c < anzahlarrayname + 1; c = c + 1){
            let fields = document.getElementById(c).value;
            if(fields != "" || fields != 0){
                newFelder.push(fields);
                d = d + 1;
            }else{
                newFelder.push(d);
                d = d + 1;
            }

            console.log(fields);
            console.log(c);
            console.log(newFelder);
        }

        //save Player Names
        var namesave = JSON.stringify(newFelder);
        localStorage.setItem("namesaver", namesave);


        playerkey.innerHTML = "okay";
        var container = document.getElementById("input-container");
        container.innerHTML = '';
        reset = 1;
        var eingabeWert = parseInt(eingabeElement.value);

        
        
        if (eingabeWert >= 2 && eingabeWert <= 99 && b == 2) {
              close.style.display = "none";
              game1.style.display = "block";
              game2.style.display = "block";
              game3.style.display = "block";
              game4.style.display = "block";
              sidebar.style.display = "block";
              coming_of_age.style.display = "block";
              coming_of_age.style.visibility = "hidden";

              // Anzahl der Spieler ist gleich der Länge des Arrays
      
          }else {
              alert("Bitte gib eine Nummer zwischen 2 und 99 ein.");
              location.reload();
            
          }
    }  
    checkbox.addEventListener('change', function() {
        var checkboxtheme = document.getElementById('changechecktheme');
        if (checkboxtheme.checked) {
            console.log('Checkbox ist aktiviert.');
            checkboxtheme.checked = true;
            window.localStorage.setItem("theme", 1);
        } else {
            checkboxtheme.checked = false;
            console.log('Checkbox ist deaktiviert.');
            window.localStorage.setItem("theme", 2);
        }
    });
        //window.localStorage.setItem("theme", 1);
    //theme loader
    
}


