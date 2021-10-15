<?php
/*
|--------------------------------------------------------------------------
| DNA to RNA Conversion
|--------------------------------------------------------------------------
|
*/

function dnaToRna($str) {
   return implode('U', explode('T', $str));
}


function dnaToRna($str) {
   return str_replace("T", "U", $str);
}


function dnaToRna($str) {
   $dnaRegex = "/^(G|C|A|T)*$/i";
   if (preg_match($dnaRegex, $str)) {
      return strtoupper(str_replace("T", "U", $str));
   } 
}


function dnaToRna($str) {
   return strtr($str, 'T', 'U');
}


print_r(DNAtoRNA("TTTT") . " UUUU
");
print_r(DNAtoRNA("GCAT") . " GCAU
");
print_r(DNAtoRNA("GACCGCCGCC") . " GACCGCCGCC
");