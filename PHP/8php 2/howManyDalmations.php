<?php
/*
|--------------------------------------------------------------------------
| 101 Dalmatians - squash the bugs, not the dogs!
|--------------------------------------------------------------------------
|
*/

function howManyDalmations($n) {
   return $n <= 10 ? "Hardly any" : ($n <= 50 ? "More than a handful!" : ($n >= 101 ? "101 DALMATIANS!!!" : "Woah that's a lot of dogs!"));
}


function howManyDalmations($number) {
   $dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
   return $number <= 10 ? $dogs[0] : ($number <= 50 ? $dogs[1] : ($number > 100 ? $dogs[3] : $dogs[2]));
}


function howManyDalmations($number) {
   $dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
   switch (true) {
      case ($number <= 10):
      return $dogs[0];
      case ($number <= 50):
      return $dogs[1];
      case ($number === 101):
      return $dogs[3];
      default:
      return $dogs[2];
   }
}


print_r(howManyDalmations(26) . " More than a handful!
");
print_r(howManyDalmations(8) . " Hardly any
");
print_r(howManyDalmations(14) . " More than a handful!
");
print_r(howManyDalmations(80) . " Woah that's a lot of dogs!
");
print_r(howManyDalmations(100) . " Woah that's a lot of dogs!
");
print_r(howManyDalmations(101) . " 101 DALMATIANS!!!
");