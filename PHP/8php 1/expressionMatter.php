<?php
/*
|--------------------------------------------------------------------------
| Expressions Matter
|--------------------------------------------------------------------------
|
*/

function expressionMatter($a, $b, $c) {
   return max($a+$b+$c, $a*$b*$c, ($a+$b)*$c, $a*($b+$c));
}


function expressionMatter($a, $b, $c) {
   return max([
      $a+$b+$c,
      ($a+$b)*$c,
      $a*($b+$c),
      $a+$b*$c,
      $a*$b+$c,
      $a*$b*$c
   ]);
}


print_r(expressionMatter(2, 1, 2) . ' ' . 6 . '
');
print_r(expressionMatter(2, 1, 1) . ' ' . 4 . '
');
print_r(expressionMatter(2, 2, 4) . ' ' . 16 . '
');