/*
|--------------------------------------------------------------------------
| Beginner - Reduce but Grow
|--------------------------------------------------------------------------
|
*/

function grow(x) {
   return x.reduce((acc, curr) => acc * curr);
}


const grow = x => eval(x.join("*"))


function grow(x) {
   var product = 1;
   x.forEach(function (e) {
      product *= e
   })
   return product;
}


const grow = x => {
   let res = 1;
   for (let i = 0; i < x.length; i++) {
      res *= x[i];
   }
   return res;
};


console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);