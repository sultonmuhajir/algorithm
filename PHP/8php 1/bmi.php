<?php
/*
|--------------------------------------------------------------------------
| Calculate BMI
|--------------------------------------------------------------------------
|
*/

function bmi($weight, $height) {
   $bmi = $weight / ($height ** 2);
   return $bmi <= 18.5 ? "Underweight" : ($bmi <= 25.0 ? "Normal" : ($bmi <= 30.0 ? "Overweight" : "Obese"));
}


function bmi($weight, $height) {
   $bmi = $weight / ($height * $height);
   return match(true) {
      $bmi <= 18.5 => "Underweight",
      $bmi <= 25.0 => "Normal",
      $bmi <= 30.0 => "Overweight",
      $bmi > 30.0 => "Obese",
   };
}


function bmi($weight, $height) {
   $bmi = $weight /($height*$height);
   if ($bmi<=18.5) return "Underweight";
   if ($bmi <= 25.0 ) return "Normal";
   if ($bmi <= 30.0 ) return "Overweight";
   if ($bmi > 30 ) return "Obese";
}


print_r(bmi(80, 1.80) . " Normal
");
print_r(bmi(70, 1.70) . " Normal
");
print_r(bmi(80, 1.60) . " Obase
");