/*
|--------------------------------------------------------------------------
| Points of Reflection
|--------------------------------------------------------------------------
|
*/

function symmetricPoint(p, q) {
   return [2 * q[0] - p[0], 2 * q[1] - p[1]]
}


function symmetricPoint(p, q) {
   return p.map((a, i) => q[i] * 2 - a)
}


function symmetricPoint([x, y], [a, b]) {
   return [2 * a - x, 2 * b - y]
}


console.log(symmetricPoint([0, 0], [1, 1]), [2, 2]);
console.log(symmetricPoint([2, 6], [-2, -6]), [-6, -18]);
console.log(symmetricPoint([10, -10], [-10, 10]), [-30, 30]);
console.log(symmetricPoint([1, -35], [-12, 1]), [-25, 37]);
console.log(symmetricPoint([1000, 15], [-7, -214]), [-1014, -443]);
console.log(symmetricPoint([0, 0], [0, 0]), [0, 0]);