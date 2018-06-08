// function max(numbers) {
// 	let maxi = numbers[0];
// 	for(let i = 0; i<numbers.length; i++) {
// 		if(numbers[i]>maxi) {
// 			maxi = numbers[i]
// 		}
// 	}
// 	return maxi;
// }

// function min(numbers) {
// 	let mini = numbers[0];
// 	for(let i = 0; i<numbers.length; i++) {
// 		if(numbers[i]<mini) {
// 			mini = numbers[i]
// 		}
// 	}
// 	return mini;
// }

// function max(numbers) {
// 	return Math.max(numbers);
// }

// function min(numbers) {
// 	return Math.min(numbers);
// }

// function max(numbers) {
// 	const sorting = max.sort((a,b) => b-a);
// 	return sorting[0];
// }

// function min(numbers) {
// 	const sorting = min.sort();
// 	return sorting[0];
// }

function average(numbers) {
	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total/numbers.length;
}


function fizzBuzz(countTo) {
	let result = [];
	for (let i = 1; i <= countTo; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			result.push("fizzbuzz");
		}
		else if(i % 5 === 0) {
			result.push("buzz");
		}
		else if (i % 3 === 0) {
			result.push("fizz");
		}
		else {
			result.push(i);
		}
	}
	return result;
}

