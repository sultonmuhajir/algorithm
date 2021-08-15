<?php
/*
|--------------------------------------------------------------------------
| Convert boolean values to strings 'Yes' or 'No'.
|--------------------------------------------------------------------------
|
*/

function boolToWord($bool){
   return $bool ? 'Yes' : 'No';
}


function boolToWord(bool $bool){
   if($bool) {
     return 'Yes';
   } else {
     return 'No';
   }
}


function boolToWord($bool){
   return $bool == true ? 'Yes' : 'No';
}


print_r(boolToWord(true). ' Yes
');
print_r(boolToWord(false). ' No
');