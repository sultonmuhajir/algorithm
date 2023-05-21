/*
|--------------------------------------------------------------------------
| Draw stairs
|--------------------------------------------------------------------------
|
*/

function drawStairs(n) {
   res = [];
   for (let i = 0; i < n; i++) {
      res.push(" ".repeat(i) + "I");
   }
   return res.join("\n");
}


const drawStairs = (n) => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");


function drawStairs(n) {
   return Array(n)
      .fill("I")
      .map((e, i) => e.padStart(i + 1, " "))
      .join("\n");
}


console.log(drawStairs(1));
console.log(drawStairs(3));
console.log(drawStairs(5));