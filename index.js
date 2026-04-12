const hourValue = document.querySelector('.hourValue');
const minuteValue = document.querySelector('.minuteValue');
const secondValue = document.querySelector('.secondValue');
const ampm = document.querySelector('.ampm');

function updateClock() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ampmValue = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 || 12;
    hourValue.textContent = hour12.toString().padStart(2, '0');
    minuteValue.textContent = m.toString().padStart(2, '0');
    secondValue.textContent = s.toString().padStart(2, '0');
    ampm.textContent = ampmValue;
}

updateClock();
setInterval(updateClock, 1000);
