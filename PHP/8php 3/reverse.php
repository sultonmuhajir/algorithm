<?php
/*
|--------------------------------------------------------------------------
| Reversing Words in a String
|--------------------------------------------------------------------------
|
*/

function reverse($string) {
   return implode(' ', array_reverse(explode(' ', $string)));
}


function reverse($string) {
   $res = '';
   $tokens = explode(' ', $string);
   for ($i=(count($tokens)-1); $i >= 0; $i--) {
      $res .= $tokens[$i].' ';
   }
   return trim($res);
}


function reverse($string) {
   $res = '';
   foreach (array_reverse(explode(' ', $string)) as $el) {
      $res .= $el . ' ';
   }  
   return trim($res);
}


function reverse($string) {
   $res = [];
   $words = explode(' ', $string);
   for($i = count($words) - 1; $i>=0; $i--){
      $res[] = $words[$i];
   }
   return implode(' ', $res);
}


print_r(reverse('I am an expert at this') . ' this at expert an am I
');
print_r(reverse('This is so easy') . ' easy so is This
');
print_r(reverse('no one cares') . ' cares one no
');
print_r(reverse('') . ' 
');
print_r(reverse('CodeWars') . ' CodeWars
');