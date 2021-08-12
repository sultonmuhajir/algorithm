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


echo(bonusTime(60000, false)), '
';
echo(bonusTime(2, true)), '
';
echo(bonusTime(78, false)), '
';