function computeArea(width, height) {
	return width * height;
}

function celsToFahr(celsTemp) {
	return celsTemp * 9/5 + 32;
}

function fahrToCelsius(fahrTemp) {
	return (fahrTemp-32) + 9/5;
}

function isDivisble(divisee, divisor) {
	return divisee % divisor === 0;
}