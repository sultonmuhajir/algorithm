<?php
/*
|--------------------------------------------------------------------------
| Grasshopper - Messi goals function
|--------------------------------------------------------------------------
|
*/

function goals (int $laLigaGoals, int $copaDelReyGoals, int $championsLeagueGoals) : int {
   return $laLigaGoals + $copaDelReyGoals + $championsLeagueGoals;
}


function goals(int ...$args): int {
   return array_sum($args);
}


function goals() {
   return array_sum(func_get_args());
}


print_r(goals(0, 0, 0) . ' ' . 0 . '
');
print_r(goals(43, 10, 5) . ' ' . 58 . '
');