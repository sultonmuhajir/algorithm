function countPositivesSumNegatives(input) {
	if (input === null || input.length === 0) {
		return [];
	} else {
		let plus = 0
		let min = 0
		for (let i in input) {
			input[i] > 0 ? plus++ : min += input[i];
		}
		return [plus, min];
	}
}


function countPositivesSumNegatives(input) {
	return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}


function countPositivesSumNegatives(input) {
	if (!Array.isArray(input) || !input.length) return [];
	return input.reduce((arr, n) => {
		if (n > 0) arr[0]++;
		if (n < 0) arr[1] += n;
		return arr;
	}, [0, 0]);
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65]);
console.log(countPositivesSumNegatives(null), []);
console.log(countPositivesSumNegatives([]), []);
