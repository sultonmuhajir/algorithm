/*
|--------------------------------------------------------------------------
| Swap Values
|--------------------------------------------------------------------------
|
*/

function swapValues(args) {
   return ([args[0], args[1]] = [args[1], args[0]]);
}


function swapValues(args) {
   var temp = args[0];
   args[0] = args[1];
   args[1] = temp;
}


function swapValues(args) {
   return args.reverse();
}


console.log(swapValues([1, 2]));
console.log(swapValues([1, 2]));