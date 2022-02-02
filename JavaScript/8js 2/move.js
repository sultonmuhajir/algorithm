/*
|--------------------------------------------------------------------------
| Grasshopper - Terminal game move function
|--------------------------------------------------------------------------
|
*/

function move(position, roll) {
   return position + roll * 2;
}


const move = (_, $, _$) => (_ + [_$ = -~[], ++_$][-~[]] * $)


function move(position, roll) {
   return position + roll + roll;
}


const move = (_, __) => _ + 2 * (__)


console.log(move(0, 4), 8);
console.log(move(3, 6), 15);
console.log(move(2, 5), 12);