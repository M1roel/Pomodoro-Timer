const PINK = "#e2979c";
    const RED = "#e7305b";
    const GREEN = "#9bdeac";
    const WORK_MIN = 25;
    const SHORT_BREAK_MIN = 5;
    const LONG_BREAK_MIN = 20;
    let reps = 0;
    let timer;

    function resetTimer() {
        clearTimeout(timer);
        document.getElementById('timer').textContent = "00:00";
        document.getElementById('title').textContent = "Timer";
        document.getElementById('check-marks').textContent = "";
        reps = 0;
    }

    function startTimer() {
        reps++;
        const workSec = WORK_MIN * 60;
        const shortBreakSec = SHORT_BREAK_MIN * 60;
        const longBreakSec = LONG_BREAK_MIN * 60;

        if (reps % 8 === 0) {
            countDown(longBreakSec);
            document.getElementById('title').textContent = "Break";
            document.getElementById('title').style.color = RED;
        } else if (reps % 2 === 0) {
            countDown(shortBreakSec);
            document.getElementById('title').textContent = "Break";
            document.getElementById('title').style.color = PINK;
        } else {
            countDown(workSec);
            document.getElementById('title').textContent = "Work";
            document.getElementById('title').style.color = GREEN;
        }
    }

    function countDown(count) {
        const minutes = Math.floor(count / 60);
        let seconds = count % 60;
        if (seconds < 10) seconds = `0${seconds}`;

        document.getElementById('timer').textContent = `${minutes}:${seconds}`;
        if (count > 0) {
            timer = setTimeout(() => countDown(count - 1), 1000);
        } else {
            startTimer();
            let marks = "";
            const workSessions = Math.floor(reps / 2);
            for (let i = 0; i < workSessions; i++) {
                marks += "✔";
            }
            document.getElementById('check-marks').textContent = marks;
        }
    }

    document.getElementById('start-button').addEventListener('click', startTimer);
    document.getElementById('reset-button').addEventListener('click', resetTimer);