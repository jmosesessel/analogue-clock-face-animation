function updateClock() {
	const currentDate = new Date();
	const secs = currentDate.getSeconds();
	const mins = currentDate.getMinutes() + secs / 60;
	const hours = (currentDate.getHours() % 12) + mins / 60;

	// console.log("current time:", `${hours}:${mins}:${secs}`);
	const secHandRotate = document
		.getElementById("seconds")
		.setAttribute("transform", `rotate(${secs * (360 / 60)}, 244, 251)`);
	const minHandRotate = document
		.getElementById("minutes")
		.setAttribute("transform", `rotate(${mins * (360 / 60)}, 244, 251)`);
	const hourHandRotate = document
		.getElementById("hours")
		.setAttribute("transform", `rotate(${hours * (360 / 12)}, 244, 251)`);
}

setInterval(() => {
	updateClock();
}, 1000);

