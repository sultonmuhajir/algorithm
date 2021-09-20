/*
|--------------------------------------------------------------------------
| You only need one - Beginner
|--------------------------------------------------------------------------
|
*/

function check(a, x) {
   return a.includes(x);
}


function check(a, x) {
   let res = []
   for (let i = 0; i < a.length; i++) {
      if (a[i] == x) {
         res.push(a[i])
      }
   }
   return res.length ? true : false;
}


function check(a, x) {
   return a.indexOf(x) > -1;
}


function check(a, x) {
   let b = a.filter(el => el == x);
   return b.length ? true : false;
}


function check(a, x) {
   return a.some(i => i === x);
}


console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);