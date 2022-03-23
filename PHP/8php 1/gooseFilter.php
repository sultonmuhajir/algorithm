<?php
/*
|--------------------------------------------------------------------------
| Filter out the geese
|--------------------------------------------------------------------------
|
*/


function gooseFilter($birds) {
   $res = [];
   for ($i=0; $i < count($birds); $i++) { 
      if ($birds[$i] != "African" && $birds[$i] != "Roman Tufted" && $birds[$i] != "Toulouse" && $birds[$i] != "Pilgrim" && $birds[$i] != "Steinbacher") {
         array_push($res, $birds[$i]);
      }
   }
   return $res;
}


function gooseFilter($birds) {
   $geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
   return array_values(array_diff($birds, $geese));
}


function gooseFilter($birds): array {
   $geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
   return array_values(array_filter($birds, function($bird) use ($geese) {
      return !in_array($bird, $geese);
   }));
}


function gooseFilter($birds) {
   foreach(array_diff($birds, ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]) as $val) $res[] = $val;
   return $res ?: [];  
}
 

print_r(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));