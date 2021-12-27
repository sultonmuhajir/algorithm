<?php
/*
|--------------------------------------------------------------------------
| Switch it Up!
|--------------------------------------------------------------------------
|
*/

function switch_it_up($number) {
   return ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'][$number];
}


function switch_it_up($number) {
   switch ($number) {
      case 0: return "Zero";
      case 1: return "One";
      case 2: return "Two";
      case 3: return "Three";
      case 4: return "Four";
      case 5: return "Five";
      case 6: return "Six";
      case 7: return "Seven";
      case 8: return "Eight";
      default: return "Nine";
   }
}


function switch_it_up($number) {
   return match ($number) {
      0 => 'Zero',
      1 => 'One',
      2 => 'Two',
      3 => 'Three',
      4 => 'Four',
      5 => 'Five',
      6 => 'Six',
      7 => 'Seven',
      8 => 'Eight',
      9 => 'Nine',
   };
}


print_r(switch_it_up(0) . " Zero
");
print_r(switch_it_up(9) . " Nine
");