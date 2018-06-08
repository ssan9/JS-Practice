function firstFourItems(array) {
	return array.slice(0,4); 
}

function lastThreeItems(array) {
	return array.slice(-3);
}

function minusLastItem(array) {
	return array.slice(0, array.length-1);
}

function copyFirstHalf(array) {
	return array.slice(0, array.length/2);
}

function squares(array) {
	return array.map(sq);
}

function sq(num) {
	return num*num;
}

or

function squares(array) {
	return array.map(num => num**2);
}

function greatestToLeast(array) {
	return array.sort(sorting);
}

function sorting(a, b) {
	return b-a;
}

or

function greatestToLeast(array) {
	return array.sort((a, b) => b-a);
}

function shortWords(array) {
	return array.filter(characters);
}

function str(characters) {
	return characters.length<5;
}

or

function shortWords(array) {
	return array.filter(characters => characters.length<5);
}

function divisibleBy5(array) {
	return array.find(num => num%5 === 0);
}

function divisibleBy5(array){
	return array.find(divBy5)
}

function divBy5(num) {
	return num%5 === 0;
}

function divisibleBy5(array) {
  return array.find(function(num) {
    return num % 5 === 0;
  });
}