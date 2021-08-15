<?php
/*
|--------------------------------------------------------------------------
| Century From Year
|--------------------------------------------------------------------------
|
*/

function centuryFromYear($year)
{
   return ceil($year/100);
}


function centuryFromYear($year) {
   return intdiv($year + 99, 100);
}


function centuryFromYear($year)
{
  return (int)(($year-1)/100+1);
}


function centuryFromYear($year){
   for($y=0,$century=0; $y<$year; $y+=100,$century++){ }
   return $century;
}


print_r(centuryFromYear(1705).' ' .  18 . '
');
print_r(centuryFromYear(1900).' ' .  19 . '
');
print_r(centuryFromYear(1601).' ' .  17 . '
');
print_r(centuryFromYear(2000).' ' .  20 . '
');
print_r(centuryFromYear(89).' ' .  1 . '
');