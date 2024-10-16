const time = 25 * 60;
let timeleft = time;
let interval;
const display = document.getElementById("time");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const restart = document.getElementById("restart");

function updateDisplay() {
  const minutes = Math.floor(timeleft / 60);
  const seconds = timeleft % 60;
  display.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

function timestart() {
  start.addEventListener("click", () => {
    start.disabled = true;
    pause.disabled = false;

    interval = setInterval(() => {
      if (timeleft <= 0) {
        clearInterval(interval);
        alert("tempo esgotado!");
        start.disabled = false;
      } else {
        timeleft--;
        updateDisplay();
      }
    }, 1000);
  });
}

function timepause() {
  pause.addEventListener("click", () => {
    clearInterval(interval);
    pause.disabled = true;
    start.disabled = false;
  });
}

function timerestar() {
  restart.addEventListener("click", () => {
    clearInterval(interval);
    timeleft = time;
    updateDisplay();
    start.disabled = false;
    pause.disabled = true;
  });
}

function playMusic() {
  let audio = new Audio("song.mp3")
  audio.play()
}

updateDisplay();  
timestart();
timepause();
timerestar();
