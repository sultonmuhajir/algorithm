<?php
/*
|--------------------------------------------------------------------------
| Drink about
|--------------------------------------------------------------------------
|
*/

function people_with_age_drink(int $old): string {
   return $old < 14 ? 'drink toddy' : ($old < 18 ? 'drink coke' : ($old < 21 ? 'drink beer' : 'drink whisky'));
}


function people_with_age_drink(int $n): string {
   return 'drink ' . ($n < 21 ? $n < 18 ? $n < 14 ? 'toddy' : 'coke' : 'beer' : 'whisky');
}


function people_with_age_drink(int $old): string {
   switch (true) {
      case ($old < 14): return "drink toddy";
      case ($old < 18): return "drink coke";
      case ($old < 21): return "drink beer";
      case ($old >= 21): return "drink whisky";
   }
}


function people_with_age_drink(int $old): string {
   $limit = [14 => 'toddy', 18 => 'coke', 21 => 'beer'];
   foreach ($limit as $age => $drink) {
      if ($old < $age) {
         return 'drink ' . $drink;
      }
   }
   return 'drink whisky';
}


print_r(people_with_age_drink(22) . ' drink whisky');