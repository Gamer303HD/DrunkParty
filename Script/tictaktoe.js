var playerwahl = 1;
var selplayers = 1;
var winorlose = 0;

let field01 = document.getElementById("btn-1");
var field02 = document.getElementById("btn-2");
var field03 = document.getElementById("btn-3");
var field04 = document.getElementById("btn-4");
var field05 = document.getElementById("btn-5");
var field06 = document.getElementById("btn-6");
var field07 = document.getElementById("btn-7");
var field08 = document.getElementById("btn-8");
var field09 = document.getElementById("btn-9");
var xo = document.getElementById("xo");

a = true;
b = true;
c = true;
d = true;
e = true;
f = true;
g = true;
h = true;
i = true;

function main(selected){

    switch (playerwahl){
        case 1:
            if(playerwahl == 1){
                console.log("auswahl: " + playerwahl);
                xo.textContent  = "Player: X";
                player1(selected);
            }
        case 2:
            if(playerwahl == 2){
                console.log("auswahl: " + playerwahl);
                xo.textContent  = "Player: O";
                player2(selected);
            }
            finisher();
    }
}

function player1(playerfield1){
    const xo = document.getElementById("xo");
    xo.innerHTML = "Player: X";
    if(playerfield1 == 1 && a == true){
        field01.innerHTML = "X";
        xo.textContent  = "Player: O";
        a = false;
        playerwahl = 2;
        field01.style.color = "red";
        winorlose++;

    }else if(playerfield1 == 2 && b == true ){
        field02.innerHTML = "X";
        xo.textContent  = "Player: O";
        b = false;
        playerwahl = 2;
        field02.style.color = "red";
        winorlose++;
    }else if(playerfield1 == 3 && c == true){
        field03.innerHTML = "X";
        xo.textContent  = "Player: O";
        c = false;
        playerwahl = 2;   
        field03.style.color = "red";  
        winorlose++;   
    }else if(playerfield1 == 4 && d == true){
        field04.innerHTML = "X";
        xo.textContent  = "Player: O";
        d = false;
        playerwahl = 2;     
        field04.style.color = "red";  
        winorlose++; 
    }else if(playerfield1 == 5 && e == true){
        field05.innerHTML = "X";
        xo.textContent  = "Player: O";
        e = false;
        playerwahl = 2;    
        field05.style.color = "red"; 
        winorlose++;   
    }else if(playerfield1 == 6 && f == true){
        field06.innerHTML = "X";
        xo.textContent  = "Player: O";
        f = false;
        playerwahl = 2;   
        field06.style.color = "red";   
        winorlose++;  
    }else if(playerfield1 == 7 && g == true){
        field07.innerHTML = "X";
        xo.textContent  = "Player: O";
        g = false;
        playerwahl = 2;   
        field07.style.color = "red";    
        winorlose++; 
    }else if(playerfield1 == 8 && h == true){
        field08.innerHTML = "X";
        xo.textContent  = "Player: O";
        h = false;
        playerwahl = 2;
        field08.style.color = "red";
        winorlose++;
    }else if(playerfield1 == 9 && i == true){
        field09.innerHTML = "X";
        xo.textContent  = "Player: O";
        i = false;
        playerwahl = 2;       
        field09.style.color = "red"; 
        winorlose++;
    }else if(a == false || b == false || c == false || d == false || e == false || f == false || g == false || h == false || i == false){
        playerwahl = 1;
    }
   

}

function player2(playerfield2){
    fieldall = field01 + field02
    field01.style.color = "white";
    const f1 = field01.innerHTML;
    const f2 = field01.innerHTML;
    const f3 = field01.innerHTML;
    const f4 = field01.innerHTML;
    const f5 = field01.innerHTML;
    const f6 = field01.innerHTML;
    const f7 = field01.innerHTML;
    const f8 = field01.innerHTML;
    const f9 = field01.innerHTML;

    if(playerfield2 == 1 && a == true){
        field01.innerHTML = "O";
        xo.textContent  = "Player: X";
        a = false;

    }else if(playerfield2 == 2 && b == true ){
        field02.innerHTML = "O";
        xo.textContent  = "Player: X";
        b = false;
        playerwahl = 1;
        winorlose++;
    }else if(playerfield2 == 3 && c == true){
        field03.innerHTML = "O";
        xo.textContent  = "Player: X";
        c = false;
        playerwahl = 1;      
        winorlose++;  
    }else if(playerfield2 == 4 && d == true){
        field04.innerHTML = "O";
        xo.textContent  = "Player: X";
        d = false;
        playerwahl = 1;   
        winorlose++;     
    }else if(playerfield2 == 5 && e == true){
        field05.innerHTML = "O";
        xo.textContent  = "Player: X";
        e = false;
        playerwahl = 1;    
        winorlose++;    
    }else if(playerfield2 == 6 && f == true){
        field06.innerHTML = "O";
        xo.textContent  = "Player: X";
        f = false;
        playerwahl = 1;   
        winorlose++;     
    }else if(playerfield2 == 7 && g == true){
        field07.innerHTML = "O";
        xo.textContent  = "Player: X";
        g = false;
        playerwahl = 1;     
        winorlose++;   
    }else if(playerfield2 == 8 && h == true){
        field08.innerHTML = "O";
        xo.textContent  = "Player: X";
        h = false;
        playerwahl = 1;
        winorlose++;
    }else if(playerfield2 == 9 && i == true){
        field09.innerHTML = "O";
        xo.textContent  = "Player: X";
        i = false;
        playerwahl = 1;   
        winorlose++;     
    }else if(a == false || b == false || c == false || d == false || e == false || f == false || g == false || h == false || i == false){
        playerwahl = 2;
    }
    
}

function finisher(){
    const f1 = field01.innerHTML;
    const f2 = field02.innerHTML;
    const f3 = field03.innerHTML;
    const f4 = field04.innerHTML;
    const f5 = field05.innerHTML;
    const f6 = field06.innerHTML;
    const f7 = field07.innerHTML;
    const f8 = field08.innerHTML;
    const f9 = field09.innerHTML;

    console.log(f1);
    console.log(f2);
    console.log(f3);
    console.log(f4);
    console.log(f5);
    console.log(f6);
    console.log(f7);
    console.log(f8);
    console.log(f9);


    if(f1 == "O" && f2 == "O" && f3 == "O" && a == false && b == false && c == false|| f4 == "O" && f5 == "O" && f6 == "O" && d == false && e == false && f == false|| f7 == "O" && f8 == "O" && f9 == "O" && g == false && h == false && i == false|| f2 == "O" && f5 == "O" && f8 == "O" && b == false && e == false && h == false|| f3 == "O" && f6 == "O" && f9 == "O" && c == false && f == false && i == false|| f3 == "O" && f5 == "O" && f7 == "O" && c == false && e == false && g == false){
        winner(1);
    }
    if(f1 == "X" && f2 == "X" && f3 == "X" && a == false && b == false && c == false|| f4 == "X" && f5 == "X" && f6 == "X" && d == false && e == false && f == false|| f7 == "X" && f8 == "X" && f9 == "X" && g == false && h == false && i == false|| f2 == "X" && f5 == "X" && f8 == "X" && b == false && e == false && h == false|| f3 == "X" && f6 == "X" && f9 == "X" && c == false && f == false && i == false|| f3 == "X" && f5 == "X" && f7 == "X" && c == false && e == false && g == false){
        winner(2);
    }else{
        if(winorlose == 9){
            winner(3);
        }
    }
}

function winner(nb){
    
    if(nb == 1){
        alert("Player 1 hat gewonnen")
    }else if(nb == 2){
        alert("Player 2 hat gewonnen")
    }else if(nb == 3){
        alert("Unendschieden")
    }
    
    a = true;
    b = true;
    c = true;
    d = true;
    e = true;
    f = true;
    g = true;
    h = true;
    i = true;
    field01.innerHTML = "";
    field02.innerHTML = "";
    field03.innerHTML = "";
    field04.innerHTML = "";
    field05.innerHTML = "";
    field06.innerHTML = "";
    field07.innerHTML = "";
    field08.innerHTML = "";
    field09.innerHTML = "";
    playerwahl = 1;
    selplayers = 1;
    winorlose = 0;
}

