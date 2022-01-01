<?php
/*
|--------------------------------------------------------------------------
| Student's Final Grade
|--------------------------------------------------------------------------
|
*/

function finalGrade($exam, $projects) {
   if ($exam > 90 || $projects > 10) {
      return 100;
   } else if ($exam > 75 && $projects >= 5) {
      return 90;
   } else if ($exam > 50 && $projects >= 2) {
      return 75;
   } else {
      return 0;
   }
}


function finalGrade($exam, $projects) {
   return $exam > 90 or $projects > 10 ? 100 : ($exam > 75 && $projects > 4 ? 90 : ($exam > 50 && $projects > 1 ? 75 : 0));
}


function finalGrade($exam, $projects) {
   switch(true) {
      case $exam > 90 || $projects > 10:
         return 100;
   
      case $exam > 75 && $projects > 4:
         return 90;
      
      case $exam > 50 && $projects > 1:
         return 75;
         
      default:
         return 0;
   }
}


function finalGrade($exam, $projects) {
   return $exam <= 90 && $projects <= 10 ? $exam <= 75 || $projects < 5 ? $exam <= 50 || $projects < 2 ? 0 : 75 : 90 : 100;
}


print(finalGrade(100, 12) . ' ' . 100 . '
');
print(finalGrade(85, 5) . ' ' . 90 . '
');