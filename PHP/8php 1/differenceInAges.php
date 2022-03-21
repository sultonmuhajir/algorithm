<?php
/*
|--------------------------------------------------------------------------
| Find the Difference in Age between Oldest and Youngest Family Members
|--------------------------------------------------------------------------
|
*/

function differenceInAges($ages) {
   return [min($ages), max($ages), max($ages)-min($ages)];
}


function differenceInAges($a){
   return array(min($a) ,max($a), max($a)-min($a));
}


function differenceInAges($ages) {
   return $arr = ["0" => min($ages),
                  "1" => max($ages),
                  "2" => max($ages)-min($ages)
   ];
}


print_r(differenceInAges([82, 15, 6, 38, 35]));
print_r(differenceInAges([57, 99, 14, 32]));