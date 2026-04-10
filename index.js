const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const period = document.getElementById('period');


function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    const hourLabel = hours.querySelector('.label');
    const minuteLabel = minutes.querySelector('.label');
    const secondLabel = seconds.querySelector('.label');
    
    hours.innerHTML = hour.toString().padStart(2, '0') + ' ' + hourLabel.outerHTML;
    minutes.innerHTML = minute.toString().padStart(2, '0') + ' ' + minuteLabel.outerHTML;
    seconds.innerHTML = second.toString().padStart(2, '0') + ' ' + secondLabel.outerHTML;
    
    period.textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock();