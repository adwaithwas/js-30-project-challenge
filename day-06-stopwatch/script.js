let time = 0;
let timer = null;

const display = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function timeFormat(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);

    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

startBtn.addEventListener("click", (e) => {
    if(timer != null) return;

    timer = setInterval(() => {
        time++;
        display.textContent = timeFormat(time);
    }, 1000);

})

stopBtn.addEventListener("click", (e) => {
    clearInterval(timer);
    timer = null;
})

resetBtn.addEventListener("click", (e) => {
    clearInterval(timer);
    timer = null;
    time = 0;
    display.textContent = "00:00"
})