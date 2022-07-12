<?php
/*
|--------------------------------------------------------------------------
| Grasshopper - Grade book
|--------------------------------------------------------------------------
|
*/

function getGrade($a, $b, $c) {
   $avg = ($a + $b + $c) / 3;
   return $avg >= 90 ? 'A' : ($avg < 90 && $avg >= 80 ? 'B' : ($avg < 80 && $avg >= 70 ? 'C' : ($avg < 70 && $avg >= 60 ? 'D' : 'F')));
}


function getGrade($a, $b, $c) {
   $mean = (int)(($a + $b + $c) / 3); 
   $grade = str_split('ABCDF'); 
   $result = (ceil((100 - $mean)/10)) > 5 ? 5 : (ceil((100 - $mean)/10)); 
   return  $result == 0 ? $grade[$result] : $grade[$result -1]; 
}


function getGrade(...$n) {
   $m=['F','F','F','F','F','F','D','C','B','A','A'];
   return $m[(int)((array_sum($n)/count($n))/10)];
}


function getGrade(int $a, int $b, int $c): string {
   switch (intdiv($a + $b + $c, 30)) {
      case 10: return 'A';
      case 9: return 'A';
      case 8: return 'B';
      case 7: return 'C';
      case 6: return 'D';
      default: return 'F';
   }
}


print_r(getGrade(92, 93, 94) . ' A
');   
print_r(getGrade(70, 70, 100) . ' B
');
print_r(getGrade(70, 70, 70) . ' C
');
print_r(getGrade(65, 70, 59) . ' D
');
print_r(getGrade(44, 55, 52) . ' F
'); 