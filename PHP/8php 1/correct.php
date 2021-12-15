<?php
/*
|--------------------------------------------------------------------------
| Correct the mistakes of the character recognition software
|--------------------------------------------------------------------------
|
*/

function correct($string) {
   return str_replace('1', 'I', str_replace('0', 'O', str_replace('5', 'S', $string)));
}


function correct($string) {
   return str_replace(["5", "0", "1"], ["S", "O", "I"], $string);
}


function correct(string $string): string {
   return strtr($string, "015", "OIS");
}


function correct($string) {
   return preg_replace(['/0/', '/1/', '/5/'], ['O', 'I', 'S'], $string);
}


print_r(correct("L0ND0N") . " LONDON
");
print_r(correct("DUBL1N") . " DUBLIN
");
print_r(correct("51NGAP0RE") . " SINGAPORE
");
print_r(correct("BUDAPE5T") . " BUDAPEST
");
print_r(correct("PAR15") . " PARIS
");