<?php
/*
|--------------------------------------------------------------------------
| Is this my tail?
|--------------------------------------------------------------------------
|
*/

function equivalent($body, $char) {
   return substr($body, -1) == $char;
}


function equivalent($body, $char) {
   return str_ends_with($body, $char);
}


function equivalent($body, $char): bool {
   return (bool)preg_match("/[{$char}][[:>:]]/m", $body);
}


function equivalent($body, $char) {
   return $body[-1] == $char;
}    


function equivalent($body, $char) {
   return $body[strlen($body) - 1] === $char;
}  


print_r(equivalent("Fox", "x"). ' ' . true . '
');
print_r(equivalent("Rhino", "o"). ' ' . true . '
');