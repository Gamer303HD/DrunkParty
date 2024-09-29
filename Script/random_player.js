//Game Nummer 1
var a = 0;
var b = 0;

var names = localStorage.getItem("namesaver");
var namesave = JSON.parse(names);

function load(){
   
   let playerkey = window.localStorage.getItem("playerCounterKey");
   let spinio = document.getElementById("playertitle");
   spinio.innerText = playerkey;
   document.getElementById("playertitle").style.innerHTML = "was";
}

function gamer1(){
   console.log("press");
    let spin = document.getElementById("player");
    let players = window.localStorage.getItem("playerCounterKey");
    console.log(players)
    if(players > 1 || players > 99){
        console.log("Selected Game 1"); 
        random_number(players);
        
    }else{

    }
}
async function  random_number(players) {
 
   console.log(namesave);
    let numbers = document.getElementById("numbers");
    let playerstitle = document.getElementById("playerstitle");
    let spinner = document.getElementById("spin_button");
    var spiner = document.getElementById("player");

    numbers.style.scale = "2";
    playerstitle.style.visibility = "Hidden";
    spiner.style.visibility = "Hidden";
    spinner.style.visibility = "Hidden";
    
    var min = 1;
    var max = players;
    var colore = 0;
    var min1 = 1;
    spiner.style.borderColor = "transparent";
    for(i = 0; i < 100; i++){
        var rdmplayerrdm = Math.round(Math.random() * (max - min)) + min;
        numbers.innerText = rdmplayerrdm;
        if(colore == 1){
           numbers.style.color = "#bc12dd";
           spiner.style.color = "#bc12dd";
           playerstitle.style.color = "#bc12dd";
           spinner.style.color = "#bc12dd";
           spinner.style.borderColor = "#bc12dd";
        }else if(colore == 2){
           numbers.style.color = "#dd124d";
           spiner.style.color = "#dd124d";
           playerstitle.style.color = "#dd124d";
           spinner.style.color = "#dd124d";
           spinner.style.borderColor = "#dd124d";
        }else if(colore == 3){
           numbers.style.color = "#12ddc3";
           spiner.style.color = "#12ddc3";
           playerstitle.style.color = "#12ddc3";
           spinner.style.color = "#12ddc3";
           spinner.style.borderColor = "#12ddc3";
        }else if(colore == 4){
           numbers.style.color = "#35dd12";
           spiner.style.color = "#35dd12";
           playerstitle.style.color = "#35dd12";
           spinner.style.color = "#35dd12";
           spinner.style.borderColor = "#35dd12";
        }else if(colore == 5){
           numbers.style.color = "#dddb12";
           spiner.style.color = "#dddb12";
           playerstitle.style.color = "#dddb12";
           spinner.style.color = "#dddb12";
           spinner.style.borderColor = "#dddb12";
        }else if(colore == 6){
           numbers.style.color = "#dd7f12";
           spiner.style.color = "#dd7f12";
           playerstitle.style.color = "#dd7f12";
           spinner.style.color = "#dd7f12";
           spinner.style.borderColor = "#dd7f12";
           colore = 0;
        }
        colore = colore + 1;
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 25)
    });
    let result = await promise;
    
   }
var max1 = rdmplayerrdm;

numbers.innerText = max1;
var challangemin = 1;
var challangemax = 16;
var minshot = 1;
var maxshot = 2;
var minsip = 1;
var maxsip = 2;
var shotordrink = Math.round(Math.random() * (maxsip - minsip)) + minsip;
var rdmchallange = Math.round(Math.random() * (challangemax - challangemin)) + challangemin;
var player2rdm = Math.round(Math.random() * (max1 - min1)) + min1;




if(maxsip == 1){
   shotordrink = "Shot's"
}else if(maxsip == 2){
   shotordrink = "Schlücke"
}

if(player2rdm === rdmplayerrdm){
   var player2rdm = Math.round(Math.random() * (max1 - min1)) + min1;
   console.log(player2rdm + " test")
}





player2rdm = player2rdm - 1; 
console.log(player2rdm);
var player2 = namesave[player2rdm];

rdmplayerrdm = rdmplayerrdm - 1;
console.log(rdmplayerrdm);
var rdmplayer = namesave[rdmplayerrdm];

var shotsnumber = Math.round(Math.random() * (maxshot - minshot)) + minshot;
if(shotsnumber == player2){
   var shotsnumber = Math.round(Math.random() * (maxshot - minshot)) + minshot;
}

if(shotsnumber == 1){
   if(maxsip == 1){
      shotordrink = "Shot"
   }else if(maxsip == 2){
      shotordrink = "Schluck"
   }
}

numbers.style.visibility = "Hidden";
numbers.style.scale = "1";
playerstitle.style.visibility = "Visible";
spiner.style.visibility = "Visible";
 if(rdmchallange == 1){
     alert("Spieler  " + rdmplayer + "  Verteile " + shotsnumber + " " + shotordrink);
 }else if(rdmchallange == 2){
    alert("Spieler  " + rdmplayer + "  trinkst einen Shot mit dem Spieler  " + player2);
 }else if(rdmchallange == 3){
    alert("Spieler  " + rdmplayer + "  Mache Armdrücken gegen Spieler  " + player2 + "der Verlierer Trinkt " + shotsnumber + " " + shotordrink);
 }else if(rdmchallange == 4){
    alert("Spieler  " + rdmplayer + "  Mache einen Handstand. Wenn du es nicht schaffst, trinkst du " + shotsnumber + " " + shotordrink);
 }else if(rdmchallange == 5 && b < 2){
    alert("Spieler  " + rdmplayer + "  Trink ein Wasser, du brauchst es wahrscheinlich");
    b++;
 }else if(rdmchallange == 6){
    alert("Spieler  " + rdmplayer + "  Wenn dein Name mit einem Vokal endet, trink zwei.");
 }else if(rdmchallange == 7){
    alert("Spieler  " + rdmplayer + "  Leere das Glas von dem Spieler  " + player2);
 }else if(rdmchallange == 8){
    alert("Spieler  " + rdmplayer + "  Sing ein Lied oder trink " + shotsnumber + " " + shotordrink);
 }else if(rdmchallange == 9 && a < 2){
    alert("Spieler  " + rdmplayer + "  Mystery Shot, Deine Mitspieler mischen dir einen Shot aus beliebigen Getränken.");
    a++;
 }else if(rdmchallange == 10){
    alert("Spieler  " + rdmplayer + "  Du trinkst " + shotsnumber + " " + shotordrink);
 }else if(rdmchallange == 11){
    alert("Spieler  " + rdmplayer + "  Tausche dein Getränk mit der Person mit dem vollsten Glas");
 }else if(rdmchallange == 12){
    alert("Spieler  " + rdmplayer + "  verteile 2 " + shotordrink + "!");
 }else if(rdmchallange == 13){
   alert("Spieler  " + rdmplayer + "  Tausche dein Getränk mit dem Speiler Nummer  " + player2);
 }else if(rdmchallange == 14){
   alert("Spieler " + rdmplayer + " mische dem Spieler " + player2 + "Einen starken drink zusammen")
 }else if(rdmchallange == 15){
   alert("Spieler " + rdmplayer + " tausche deinen Namen mit Spieler " + player2 +" wen der name falsch gesagt wird trink!")
 }else if(rdmplayer == 16){
   alert("Hat der Spieler nummer " + rdmplayer + " einen Freund oder Freundin dan trink!")
 }
 spiner.innerHTML = rdmplayer;
 spinner.style.visibility = "Visible";  
 numbers.style.visibility = "Visible"; 
}





