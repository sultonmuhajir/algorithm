/*
|--------------------------------------------------------------------------
| Alan Partridge II - Apple Turnover
|--------------------------------------------------------------------------
|
*/

function apple(x) {
   return x ** 2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}


function apple(x) {
   return x * x > 1e3 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}


function apple(x) {
   return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}


console.log(apple('50'), 'It\'s hotter than the sun!!');
console.log(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.');