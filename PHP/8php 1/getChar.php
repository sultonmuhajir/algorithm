<?php
/*
|--------------------------------------------------------------------------
| get character from ASCII Value
|--------------------------------------------------------------------------
|
*/

function getChar($c) {
   return chr($c);
}


function getChar($c) {
   return mb_convert_encoding('&#' . intval($c) . ';', 'UTF-8', 'HTML-ENTITIES');;
}


function getChar($c) {
   return sprintf('%c',$c);
}


function getChar ($c) {
   return html_entity_decode("&#".$c.";", ENT_QUOTES);
}


print_r(getChar(57) . ' 9
');
print_r(getChar(58) . ' :
');
print_r(getChar(65) . ' A
');