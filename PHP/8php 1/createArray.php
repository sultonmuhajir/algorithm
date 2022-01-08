<?php
/*
|--------------------------------------------------------------------------
| Unfinished Loop - Bug Fixing #1
|--------------------------------------------------------------------------
|
*/

function createArray($number){
   $newArray = [];
   for ($i=1; $i <= $number; $i++) { 
      array_push($newArray, $i);
   }
   return $newArray;
}


function createArray($number) {
   return range(1, $number);
}


function createArray($number){
   $newArray = array();
   for($count = 1; $count <= $number; $count++){
      $newArray[] = $count;
   }
   return $newArray;
}


function createArray($n){
   $arr = [];
   for ($i = 0; $i < $n; $i++) $arr[$i] = $i + 1;
   return $arr;
}


print_r(createArray(5));