const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.body;

startBtnRef.addEventListener('click', startChangeBgColor)
stopBtnRef.addEventListener('click', stopChangeBgColor)

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervallId = null
let isActive = false

function startChangeBgColor() {
    if (isActive) {
        return
    }
    isActive = true
    intervallId = setInterval(changeBodyBgColor, 1000)
}

function changeBodyBgColor() {
   bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    showBgColor() //щоб побачити поточний колір у консолі
}

function stopChangeBgColor() {
    clearInterval(intervallId)
    isActive = false
}

//щоб побачити поточний колір у консолі
function showBgColor() {
    console.log(`bg color:`, `${bodyRef.style.backgroundColor}`);
}
