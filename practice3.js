// function declarations , E6 arrow functions, function expressions

function fib(n){
	return n;
}

var fib = (n) => {

}

var fib = ((n, y) => {

})

const add = ((n, y) => {
	n + y;
})

or

const add = (n, y) => n + y;

const add = (num1, num2) => num1 + num2;
add(2, 3); // => 5

const add = function(n, y){
	return n + y;
}

const addAlt = function(num1, num2) {
  return num1 + num2;
}

const greet = () => console.log("hi");

const isEven = num => num%2===0;

// same as

const isEvenAlt = (num) => num % 2 === 0;

// same as

const isEvenAltAlt = function(num) {
  return num % 2 === 0;
}