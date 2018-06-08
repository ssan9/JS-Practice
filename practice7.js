function makeList(item1, item2, item3) {
	return makeList[item1, item2, item3];
}

//why not the following? also how can i access items here?

// function makeList(item1. item2, item3) {
// 	let array = [];
// 	return array.push(item1, item2, item3);
// }

function addToList(list, item) {
	return list.push(item);
}

function accessFirstItem(array) {
	return array[0];
}

function accessThirdItem(array) {
	return array[2];
}

function findLength(array) {
	return array.length;
}

function accessLastItem(array) {
 return array[array.length-1];
}