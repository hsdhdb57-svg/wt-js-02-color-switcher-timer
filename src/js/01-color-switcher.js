const dataStart = document.querySelector('button[data-start]');
const dataStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;
dataStop.setAttribute = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

dataStart.addEventListener('click', () => {
    dataStart.disabled = true;
    dataStop.disabled = false;
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
  }, 1000);
});

dataStop.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
  dataStart.disabled = false;
  dataStop.disabled = true;
});
