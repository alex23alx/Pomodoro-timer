const start = document.getElementById("start");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const timer = document.getElementById("timer");

let timeLeft= 1500;
let interval;
let isPaused = false;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.innerHTML =`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    
    if (timeLeft < 60) {
        timer.classList.add("alert");
    } else {
        timer.classList.remove("alert");
    }
};

const startTimer = () => {
    if (!interval) {
        interval = setInterval(() => {
            if (!isPaused) {
                timeLeft--;
                updateTimer();
                
                if (timeLeft === 0) {
                    clearInterval(interval);
                    alert("Take a break!");
                    timeLeft = 1500;
                    updateTimer();
                }
            }
        }, 1000);
    }
};

const pauseTimer = () => {
    isPaused = !isPaused;
    pause.innerText = isPaused ? "Resume" : "Pause";
};

const stopTimer = () => {
    clearInterval(interval);
    interval = null;
    timeLeft = 1500;
    updateTimer();
    isPaused = false;
    pause.innerText = "Pause";
};

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
stop.addEventListener("click", stopTimer);

updateTimer();
