<?php
/*
|--------------------------------------------------------------------------
| I love you, a little , a lot, passionately ... not at all
|--------------------------------------------------------------------------
|
*/

function how_much_i_love_you(int $nb_petals): string {
   return ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'][$nb_petals % 6];
}


function how_much_i_love_you(int $nb_petals): string {
   $x = $nb_petals % 6;
   switch($x) {
      case 0 : return "not at all";
      case 1 : return "I love you";
      case 2 : return "a little";
      case 3 : return "a lot";
      case 4 : return "passionately";
      case 5 : return "madly";
   }
}


function how_much_i_love_you(int $nb_petals): string {
   $res = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
   while(count($res) < $nb_petals) {
      $nb_petals -= count($res);
   }
  return $res[$nb_petals-1];
}


print_r(how_much_i_love_you(7) . " I love you
");
print_r(how_much_i_love_you(3) . " a lot
");
print_r(how_much_i_love_you(6) . " not at all
");