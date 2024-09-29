//Game Nummer 2
var a = 0;
var rounds = document.getElementById("delayrounds").value;
let delaytimer1 = document.getElementById("delaytime").value;


const customAlert = document.getElementById('customAlert');
    const closeButton = document.getElementById('closeButton');

    function showAlert(message) {
      customAlert.innerHTML = message;
      customAlert.style.display = 'block';
    }

    function hideAlert() {
      customAlert.style.display = 'none';
      document.getElementById("imgbottle").style.visibility = "Visible";
    }




function spinner(number){
   document.getElementById("maintitle").style.visibility = "Hidden";
   let imgbottle = document.getElementById("imgbottle");
   let spinner_button = document.getElementById("spin_button");
   let txt1 = document.getElementById("txt1");
   let txt2 = document.getElementById("txt2");
   spinner_button.style.visibility = "Hidden";
   button_settings.style.visibility = "Hidden";
   delaytime.style.visibility = "Hidden";
   txt1.style.visibility = "Hidden";
   txt2.style.visibility = "Hidden";
   let delaytimer1 = document.getElementById("delaytime").value;
   var rounds = document.getElementById("delayrounds").value;

   if(number == 1){
      spinner_random();
   }else if(number == 2 && delaytimer1 > 9 && rounds > 1){
      spinner_random1();
   }else{
      spinner_button.style.visibility = "Visible";
      button_settings.style.visibility = "Visible";
      delaytime.style.visibility = "Visible";
      txt1.style.visibility = "Visible";
      txt2.style.visibility = "Visible";
      document.getElementById("maintitle").style.visibility = "Visible";
      showAlert("Bitte gib eine gültige zahl ein. Der Delay darf nur minimal 10 sein und die runden anzahl höher als 2")
      document.getElementById("imgbottle").style.visibility = "Hidden";
      
   }
}

async function spinner_random() {
   var min = 1000; 
   var max = 2400;
   x = 0;
   var y = 0;
   var b = 0;
   var radius = Math.round(Math.random() * (max - min)) + min;
   let spinner_button = document.getElementById("spin_button");
   let imgbottle = document.getElementById("imgbottle");
   spinner_button.style.visibility = "Hidden";

   while(x < radius){
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 20);
         imgbottle.style.rotate = x + "deg";
         x = x + 15;
         if(y == 10){
            document.body.style.backgroundColor = "#bc12dd";
         }else if(y == 20){
            document.body.style.backgroundColor = "#dd124d";
         }else if(y == 30){
            document.body.style.backgroundColor = "#12ddc3";
         }else if(y == 40){
            document.body.style.backgroundColor = "#35dd12";
         }else if(y == 50){
            document.body.style.backgroundColor = "#dddb12";
         }else if(y == 60){
            document.body.style.backgroundColor = "#dd7f12";
            y = 0;
         }
         y = y + 1;
      });
      let result = await promise;
   }
   spinner_button.style.visibility = "Visible";
   button_settings.style.visibility = "Visible";
   delaytime.style.visibility = "Visible";
   txt1.style.visibility = "Visible";
   txt2.style.visibility = "Visible";
   document.body.style.backgroundColor = "rgb(12, 73, 75)";
   spinner_button.style.visibility = "Visible";
   document.getElementById("maintitle").style.visibility = "Visible";
 }

 async function spinner_random1() {
   var min = 1000; 
   var max = 2400;
   x = 0;
   a = 0;
   var y = 0;
   var radius = Math.round(Math.random() * (max - min)) + min;
   let spinner_button = document.getElementById("spin_button");
   let imgbottle = document.getElementById("imgbottle");
   var rounds = document.getElementById("delayrounds").value;
   console.log(rounds);

while(a < rounds){
   a = a + 1;
   console.log("a: " + a)
   x = 0;
   var radius = Math.round(Math.random() * (max - min)) + min;
   let delaytimer1 = document.getElementById("delaytime").value;
   newdelay = delaytimer1 * 1000;

      let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), newdelay);

      });
      let result = await promise1;

   while(x < radius){
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 20);
         imgbottle.style.rotate = x + "deg";
         x = x + 15;
         if(y == 10){
            document.body.style.backgroundColor = "#bc12dd";
         }else if(y == 20){
            document.body.style.backgroundColor = "#dd124d";
         }else if(y == 30){
            document.body.style.backgroundColor = "#12ddc3";
         }else if(y == 40){
            document.body.style.backgroundColor = "#35dd12";
         }else if(y == 50){
            document.body.style.backgroundColor = "#dddb12";
         }else if(y == 60){
            document.body.style.backgroundColor = "#dd7f12";
            y = 0;

         }
         y = y + 1;
      });
      let result = await promise;
   }
}
   spinner_button.style.visibility = "Visible";
   button_settings.style.visibility = "Visible";
   delaytime.style.visibility = "Visible";
   txt1.style.visibility = "Visible";
   txt2.style.visibility = "Visible";
   document.body.style.backgroundColor = "rgb(12, 73, 75)";
   spinner_button.style.visibility = "Visible";
   document.getElementById("maintitle").style.visibility = "Visible";
}



