/*
|--------------------------------------------------------------------------
| The falling speed of petals
|--------------------------------------------------------------------------
|
*/

function sakuraFall(v) {
   return v > 0 ? 400 / v : 0;
}


const sakuraFall = (x) => (x <= 0 ? 0 : 400 / x);


function sakuraFall(velocity) {
   if (velocity < 1) {
      return 0;
   } else {
      let distance = 400;
      return distance / velocity;
   }
}


console.log(sakuraFall(5), 80);
console.log(sakuraFall(10), 40);
console.log(sakuraFall(-1), 0);