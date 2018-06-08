// myArray.sort(function(a, b) {
// 	return a-b;
// })

// myArray.sort((a, b)=> {
// 	a-b;
// });

// myArray.sort((a, b) => a - b);

// function double(num) {
// 	return num*2;
// }

// myArray.map(double);

const steps = ["rinse", "clean", "repeat"]

const stepElements = steps.map(function(step){
	return `<li>${step}</li>`;
});

console.log(stepElements);
console.log(`<ul>${stepElements}</ul>`)
// console.log(`<ul>${stepElements.join('\n\t')}</ul>`);
console.log(`<ul>${stepElements.join('\n\t')}</ul>`);

const directionsLibrary = ["wash", "rinse", "repeat"];

function saveDirectionInDatabase(direction) {
	console.log(direction)
}

directionsLibrary.forEach(saveDirectionInDatabase);

//or

directionsLibrary.forEach(diretion => console.log(direction));


