function squareSum(numbers) {
   const result = [];
   numbers.forEach(element => {
      result.push(Math.pow(element, 2));
   });
   return result.length > 0 ? result.reduce((acc, curr) => acc + curr) : 0;
}


function squareSum(numbers) {
   return numbers.reduce((sum, num) => sum + (num * num), 0);
}


function squareSum(numbers) {
   var sum = 0;
   numbers.forEach(function (n) {
      sum += n * n
   });
   return sum;
}


console.log(squareSum([1, 2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)