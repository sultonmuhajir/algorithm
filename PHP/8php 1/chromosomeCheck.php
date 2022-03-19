<?php
/*
|--------------------------------------------------------------------------
| Determine offspring sex based on genes XX and XY chromosomes
|--------------------------------------------------------------------------
|
*/

function chromosomeCheck($sperm) {
   return "Congratulations! You're going to have a " . ($sperm == 'XY' ? 'son' : 'daughter') . '.';
}


function chromosomeCheck($sperm) {
   return $sperm == "XY" ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter.";
}


function chromosomeCheck($x) {
   return 'Congratulations! You\'re going to have a ' . (strpos($x, 'Y') === false ? 'daughter.' : 'son.');
}


print_r(chromosomeCheck('XY') . " Congratulations! You're going to have a son.
");
print_r(chromosomeCheck('XX') . " Congratulations! You're going to have a daughter.
");