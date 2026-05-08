
const targetDate = new Date("May 8, 2027 20:00:50");

const dayRef = document.querySelector('[data-value="days"]');
const hourRef = document.querySelector('[data-value="hours"]');
const minuteRef = document.querySelector('[data-value="mins"]');
const secondsRef = document.querySelector('[data-value="secs"]');

const id = setInterval(() => {
    const currentDate = new Date();
    const time = (targetDate - currentDate);

    if (time <= 0) {
        clearInterval(id);

        dayRef.textContent = "00";
        hourRef.textContent = "00";
        minuteRef.textContent = "00";
        secondsRef.textContent = "00";

        return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

     dayRef.textContent = days;
     hourRef.textContent = hours;
     minuteRef.textContent = mins;
     secondsRef.textContent = secs;
}, 1000);