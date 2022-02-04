function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', changeBgColor);
stopBtn.addEventListener('click', stopChangingBgColor);
stopBtn.disabled = true;

// function changeBgColor() {
//   timerId = setInterval(function randomBgColor() {
//     document.body.style.backgroundColor = getRandomHexColor();
//     return randomBgColor;
//   }(), 1000);
//   startBtn.disabled = true;
//   stopBtn.disabled = false;
// }

function changeBgColor() {
  function randomBgColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
  randomBgColor();
  timerId = setInterval(randomBgColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopChangingBgColor() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}