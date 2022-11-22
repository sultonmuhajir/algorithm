/*
|--------------------------------------------------------------------------
| How many stairs will Suzuki climb in 20 years?
|--------------------------------------------------------------------------
|
*/

function stairsIn20(s) {
   let res = 0;
   s.forEach(i => {
      res += i.reduce((a, b) => a + b);
   });
   return res * 20
}


function stairsIn20(a) {
   return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}


function stairsIn20(s) {
   return 20 * eval(('' + s).replace(/,/g, '+'))
}


function stairsIn20(s) {
   return [].concat(...s).reduce((pre, val) => pre + val, 0) * 20;
}


function stairsIn20(s) {
   return eval(s.map(e => e.join `+`).join `+`) * 20;
}