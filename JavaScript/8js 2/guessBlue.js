/*
|--------------------------------------------------------------------------
| Thinkful - Number Drills: Blue and red marbles
|--------------------------------------------------------------------------
|
*/

function guessBlue(bs, rs, bp, rp) {
   return (bs - bp) / (bs - bp + (rs - rp));
}


const guessBlue = (a1, b1, a2, b2) => (a1 = a1 - a2) / (a1 + b1 - b2);


function guessBlue(blueStart, redStart, bluePulled, redPulled) {
   let leftBlue = blueStart - bluePulled;
   let leftRed = redStart - redPulled;
   let leftTotal = leftBlue + leftRed;
   return leftBlue / leftTotal;
}


console.log(guessBlue(5, 5, 2, 3), 0.6);
console.log(guessBlue(5, 7, 4, 3), 0.2);
console.log(guessBlue(12, 18, 4, 6), 0.4);