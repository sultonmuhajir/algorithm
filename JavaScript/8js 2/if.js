/*
|--------------------------------------------------------------------------
| The 'if' function
|--------------------------------------------------------------------------
|
*/

function _if(bool, func1, func2) {
   return bool ? func1() : func2();
}


function _if(bool, func1, func2) {
   return arguments[~bool + 3]();
}


function _if(bool, func1, func2) {
   return (bool ? func1 : func2)();
}


console.log(
   _if(
      true,
      function () {
         console.log("True");
      },
      function () {
         console.log("false");
      }
   )
);