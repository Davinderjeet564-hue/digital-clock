const hours = document.getElementById('hours');
const hourValue = document.querySelector('.hourValue');
const hourLabel = document.querySelector('.hourLabel');
const minutes = document.getElementById('minutes');
const minuteValue = document.querySelector('.minuteValue');
const minuteLabel = document.querySelector('.minuteLabel');
const seconds = document.getElementById('seconds');
const secondValue = document.querySelector('.secondValue');
const secondLabel = document.querySelector('.secondLabel');
const period = document.getElementById('period');

function updateClock() {
    if (!hourValue || !minuteValue || !secondValue) {
        console.error('Clock elements missing');
        return;
    }

    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const displayHours = (h % 12 || 12).toString().padStart(2, '0');
    const mm = m.toString().padStart(2, '0');
    const ss = s.toString().padStart(2, '0');

    hourValue.textContent = displayHours;
    minuteValue.textContent = mm;
    secondValue.textContent = ss;
    period.textContent = h >= 12 ? 'PM' : 'AM';

    const timestring = date.toISOString();

    hours.setAttribute('datetime', timestring);
    minutes.setAttribute('datetime', timestring);
    seconds.setAttribute('datetime', timestring);
}

updateClock();
const interval = setInterval(updateClock, 1000);

window.addEventListener('beforeunload', () => clearInterval(interval));