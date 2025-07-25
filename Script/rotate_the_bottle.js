// Game Nummer 2
var a = 0;

const customAlert = document.getElementById('customAlert');
const closeButton = document.getElementById('closeButton');

function showAlert(message) {
  const alertMessage = customAlert.querySelector('.alert-message');
  alertMessage.textContent = message;
  customAlert.style.display = 'flex';
  document.getElementById("imgbottle").style.visibility = "hidden";
}

function hideAlert() {
  customAlert.style.display = 'none';
  document.getElementById("imgbottle").style.visibility = "visible";
}

function spinner(number) {
  const delaytimeInput = document.getElementById("delaytime");
  const delayroundsInput = document.getElementById("delayrounds");
  const maintitle = document.getElementById("maintitle");
  const spinner_button = document.getElementById("spin_button");
  const button_settings = document.getElementById("button_settings");
  const txt1 = document.getElementById("txt1");
  const txt2 = document.getElementById("txt2");

  maintitle.style.visibility = "hidden";
  spinner_button.style.visibility = "hidden";
  button_settings.style.visibility = "hidden";
  delaytimeInput.style.visibility = "Visible";
  delayroundsInput.style.visibility = "Visible";


  let delay = parseInt(delaytimeInput.value);
  let rounds = parseInt(delayroundsInput.value);

  if (number === 1) {
    spinner_random();
  } else if (number === 2 && delay >= 10 && rounds >= 2) {
    // Disable input fields during auto mode
    delaytimeInput.disabled = true;
    delayroundsInput.disabled = true;
    spinner_random1();
  } else {
    showAlert("Bitte gib eine gültige Zahl ein. Der Delay muss mindestens 10 Sekunden betragen und die Rundenanzahl mindestens 2.");
    // Re-enable everything
    spinner_button.style.visibility = "visible";
    button_settings.style.visibility = "visible";
    delaytimeInput.style.visibility = "visible";
    delayroundsInput.style.visibility = "visible";
    maintitle.style.visibility = "visible";

  }
}

async function spinner_random() {
  const imgbottle = document.getElementById("imgbottle");
  const spinner_button = document.getElementById("spin_button");
  let x = 0;
  let y = 0;
  const min = 1000;
  const max = 2400;
  const radius = Math.round(Math.random() * (max - min)) + min;

  while (x < radius) {
    await new Promise(resolve => setTimeout(resolve, 20));
    imgbottle.style.rotate = x + "deg";
    x += 15;
    animateColorCycle(y);
    y = (y + 1) % 61;
  }

  restoreUI();
}

async function spinner_random1() {
  const imgbottle = document.getElementById("imgbottle");
  const spinner_button = document.getElementById("spin_button");
  const delaytimeInput = document.getElementById("delaytime");
  const delayroundsInput = document.getElementById("delayrounds");
  let x = 0;
  let y = 0;
  a = 0;
  const min = 1000;
  const max = 2400;
  const rounds = parseInt(delayroundsInput.value);
  const delay = parseInt(delaytimeInput.value) * 1000;

  while (a < rounds) {
    a++;
    x = 0;
    const radius = Math.round(Math.random() * (max - min)) + min;

    if (a > 1) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    while (x < radius) {
      await new Promise(resolve => setTimeout(resolve, 20));
      imgbottle.style.rotate = x + "deg";
      x += 15;
      animateColorCycle(y);
      y = (y + 1) % 61;
    }
  }

  restoreUI();

  // Re-enable input fields
  delaytimeInput.disabled = false;
  delayroundsInput.disabled = false;
}

function animateColorCycle(y) {
  const colors = [
    "#bc12dd", "#dd124d", "#12ddc3",
    "#35dd12", "#dddb12", "#dd7f12"
  ];
  const index = Math.floor(y / 10);
  if (colors[index]) {
    document.body.style.backgroundColor = colors[index];
  }
}

function restoreUI() {
  document.getElementById("spin_button").style.visibility = "visible";
  document.getElementById("button_settings").style.visibility = "visible";
  document.getElementById("delaytime").style.visibility = "visible";
  document.getElementById("delayrounds").style.visibility = "visible";
  const txt1 = document.getElementById("txt1");
  const txt2 = document.getElementById("txt2");

  document.getElementById("maintitle").style.visibility = "visible";
  document.body.style.backgroundColor = "#333333";
}
