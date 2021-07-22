function sumArray(array) {
   if (array == null) {
      return 0;
   } else {
      let s = array.sort((a, b) => a - b);
      let arr = s.slice(1, -1).reduce((acc, curr) => acc + curr, 0);
      return arr;
   }
}


const sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;


function sumArray(array) {
   return Array.isArray(array) && array.length > 1 ?
      array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array) :
      0
}


function sumArray(array) {
   return !array || array.length < 4 ? 0 : array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((a, b) => a + b);
}


function sumArray(array) {
   array = array || [];
   return array
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((a, b) => a + b, 0);
}


console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray(), 16);