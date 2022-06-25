<?php
/*
|--------------------------------------------------------------------------
| Alan Partridge II - Apple Turnover
|--------------------------------------------------------------------------
|
*/

function apple($x) {
   return $x**2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}


function apple($x): string {
   return $x > 31 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}


function apple($x) {
   return pow($x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}


print_r(apple('50') . ' It\'s hotter than the sun!!
');
print_r(apple(4) . ' Help yourself to a honeycomb Yorkie for the glovebox.
');