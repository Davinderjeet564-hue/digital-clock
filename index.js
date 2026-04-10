const hours = document.getElementById('hours');
let hourValue = document.querySelector('.hourValue');
const hourLabel = document.querySelector('.hourLabel');
const minutes = document.getElementById('minutes');
let minuteValue = document.querySelector('.minuteValue');
const minuteLabel = document.querySelector('.minuteLabel');
const seconds = document.getElementById('seconds');
let secondValue = document.querySelector('.secondValue');
const secondLabel = document.querySelector('.secondLabel');
const period = document.getElementById('period');

function updateClock() {
    const date = new Date();
    hourValue.textContent = date.getHours().toString().padStart(2, '0');
    minuteValue.textContent = date.getMinutes().toString().padStart(2, '0');
    secondValue.textContent = date.getSeconds().toString().padStart(2, '0');
    period.textContent = date.getHours() >= 12 ? 'PM' : 'AM';
}

updateClock();
setInterval(updateClock, 1000);