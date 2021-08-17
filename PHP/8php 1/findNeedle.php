<?php
/*
|--------------------------------------------------------------------------
| A Needle in the Haystack
|--------------------------------------------------------------------------
|
*/

function findNeedle($haystack) {
   for ($i=0; $i < count($haystack); $i++) { 
      if ($haystack[$i] == 'needle') {
         return "found the needle at position {$i}";
      }
   }
}


function findNeedle($a) {
   return "found the needle at position " . array_search("needle", $a);
}


function findNeedle($haystack) {
   $haystack = array_map('strval', $haystack);
   $flipped = array_flip($haystack);
   return 'found the needle at position ' . $flipped['needle'];
}


function findNeedle($h) {
   $i=0;
   while ($h[$i] <> 'needle') { 
      $i+=1; 
   }
   return 'found the needle at position '.$i;
}


$haystack_1 = ['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false];
$haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
print_r(findNeedle($haystack_1). ' found the needle at position 3
');
print_r(findNeedle($haystack_2). ' found the needle at position 5
');