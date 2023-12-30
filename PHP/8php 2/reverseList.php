<?php
/*
|--------------------------------------------------------------------------
| Reverse List Order
|--------------------------------------------------------------------------
|
*/

function reverseList(array $list): array {
   return array_reverse($list);
}


function reverseList(array $list): array {
   $result = [];
   for($i = count($list) - 1; $i >= 0; $i--) {
      $result[] = $list[$i];
   }
   return $result;
}


function reverseList(array $list): array {
   $i = 0; $arrayLen = count($list); $x = $arrayLen - 1; $newList = array();
   while($i < $arrayLen) {
      array_push($newList,$list[$x]);
      $x--;
      $i++;
   }
   return ($newList);
}


print_r(reverseList([1, 2, 3, 4]));
print_r(reverseList([3, 1, 5, 4]));