function timesTwo(num) {
	return num*2;
}

function map(func, list) {
	let mapped = [];
	for (let n of list) {
		mapped.push(func(n));
	}
	return mapped;
}

let list = [2,4,6,8,10];
console.log(map(timesTwo,list));