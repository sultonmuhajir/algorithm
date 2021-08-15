<?php
/*
|--------------------------------------------------------------------------
| Do I get a bonus?
|--------------------------------------------------------------------------
|
*/

function bonusTime($salary, $bonus) {
   return $bonus ? '$'.$salary * 10 : '$'.$salary;
}


function bonusTime($s, $b) {
   return "$" . $s * ($b ? 10 : 1);
}


function bonusTime($salary, $bonus) {
   return '$' . ($bonus?10:1)*$salary;
}


function bonusTime( int $salary, bool $bonus ) : string {
   return "$" . strval( $bonus ?  $salary * 10 : $salary );
}


print_r(bonusTime(60000, false). ' £60000
');
print_r(bonusTime(2, true). ' £20
');
print_r(bonusTime(78, false). ' £78
');