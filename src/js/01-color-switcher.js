function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', changeBgColor);
stopBtn.addEventListener('click', stopChangingBgColor);
stopBtn.disabled = true;

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

//---------------STYLES---------------\\
startBtn.style.display = 'block';
startBtn.style.marginLeft = 'auto';
startBtn.style.marginRight = 'auto';
startBtn.style.marginBottom = '20px';
startBtn.style.padding = '5px';
startBtn.style.width = '300px';
startBtn.style.height = '50px';
startBtn.style.fontSize = '24px';
startBtn.style.fontWeight = '700';
startBtn.style.borderWidth = '5px';

stopBtn.style.display = 'block';
stopBtn.style.marginLeft = 'auto';
stopBtn.style.marginRight = 'auto';
stopBtn.style.padding = '5px';
stopBtn.style.width = '300px';
stopBtn.style.height = '50px';
stopBtn.style.fontSize = '24px';
stopBtn.style.fontWeight = '700';
stopBtn.style.borderWidth = '5px';
