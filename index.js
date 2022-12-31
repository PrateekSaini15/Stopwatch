let [hours, minutes, seconds, milliSeconds] = [0, 0, 0, 0];

let playStopButton = document.querySelector(".stopwatch__buttons__play-stop");
let resetButton = document.querySelector(".stopwatch__buttons__reset");
let timer = document.querySelector(".stopwatch__timer");
let interval = undefined;

playStopButton.addEventListener("click", function () {

	if (interval) {
		clearInterval(interval);
		interval = undefined;

		setPlayButton();

		return;
	}

	interval = setInterval(setTimer, 10);

	setPauseButton();
});

resetButton.addEventListener("click", function () {
	clearInterval(interval);
	interval = undefined;
	[hours, minutes, seconds, milliSeconds] = [0, 0, 0, 0];

	resetTimer();
	setPlayButton();
})


function tick() {

	milliSeconds++;

	if (milliSeconds == 100) {
		milliSeconds = 0;
		seconds++;
	}

	if (seconds == 60) {
		seconds = 0;
		minutes++;
	}

	if (minutes == 60) {
		minutes = 0;
		hours++;
	}
}

function setTimer() {
	tick();

	let hourText = hours < 10 ? `0${hours}` : hours;
	let minutesText = minutes < 10 ? `0${minutes}` : minutes;
	let secondsText = seconds < 10 ? `0${seconds}` : seconds;
	let milliSecondsText = milliSeconds < 10 ? `0${milliSeconds}` : milliSeconds;

	timer.textContent = `${hourText}:${minutesText}:${secondsText}:${milliSecondsText}`;
}

function resetTimer() {
	timer.textContent = "00:00:00:00";
}

function setPlayButton() {
	playStopButton.innerHTML = `<i class="fa-solid fa-play"></i>`;
	playStopButton.classList.remove("bg-yellow");
	playStopButton.classList.add("bg-green");
}

function setPauseButton() {
	playStopButton.innerHTML = `<i class="fa-solid fa-pause"></i>`;
	playStopButton.classList.remove("bg-green");
	playStopButton.classList.add("bg-yellow");
}