const timeElement = document.getElementById('clock');
const hourValue = document.querySelector('.hourValue');
const minuteValue = document.querySelector('.minuteValue');
const secondValue = document.querySelector('.secondValue');
const ampm = document.querySelector('.ampm');

function validateElements() {
    if (!timeElement || !hourValue || !minuteValue || !secondValue || !ampm) {
        console.error('Could not find clock elements');
        return false;
    }
    return true;
}

function updateClock() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ampmValue = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 || 12;
    const pad = (n)=>n.toString().padStart(2, '0');
    const timestring = `${pad(h)}:${pad(m)}:${pad(s)}`;
    hourValue.textContent = pad(hour12);
    minuteValue.textContent = pad(m);
    secondValue.textContent = pad(s);
    ampm.textContent = ampmValue;

    timeElement.setAttribute('datetime', timestring);
}

const isValid = validateElements()
if (!isValid) {
    console.error('Clock elements not found');
    return;
}

updateClock();
const intervalId = setInterval(updateClock, 1000);

window.addEventListener('beforeunload', () => {
    clearInterval(intervalId);
});
