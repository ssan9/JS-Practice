function doTrafficLights() {
	if(activeLight === "red") {
		turnRed();
	}
	if(activeLight === "yellow") {
		turnYellow();
	}
	if  (activeLight === "green") {
		turnGreen();
	}
}

function main() {
	try {
		doAllTheThings();
	}
	catch(e) {
		console.error(e);
		reportError(e);
	}
}