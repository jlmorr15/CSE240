function bigValue(num) {
	if (num > 10) {
		return true;
	}
	return false;
}


function filter(filterFunc, data) {
	let output = [];

	for (let num of data) {
		if (filterFunc(num)) {
			output.push(num);
		}
	}

	return output;
}

let testArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let newArr = filter(bigValue,testArr);

console.log(newArr);