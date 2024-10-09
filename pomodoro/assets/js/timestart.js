// timestart.js
export function timestart() {
  const time = 25 * 60;
  const display = document.getElementById("time");
  const start = document.getElementById("start");

  start.addEventListener("click", () => {
    start.disabled = true;

    let timeleft = time;

    const interval = setInterval(() => {
      if (timeleft <= 0) {
        clearInterval(interval);
        alert("tempo esgotado!");
        start.disabled = false;
      } else {
        const minutes = Math.floor(timeleft / 60);
        const seconds = timeleft % 60;

        display.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
          seconds < 10 ? "0" + seconds : seconds
        }`;
        timeleft--;
      }
    }, 1000);
  });
}
