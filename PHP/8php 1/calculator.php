<?php
/*
|--------------------------------------------------------------------------
| simple calculator
|--------------------------------------------------------------------------
|
*/

function calculator($a, $b, $sign) {
   return !in_array($sign, ['*', '/', '+', '-']) || is_string($b) || is_string($a) ? 'unknown value' : eval("return $a$sign$b;");
}


function calculator($a, $b, $sign) {
   if(!is_numeric($a) || is_string($a) || !is_numeric($b) || is_string($b)) return "unknown value";
   switch($sign){
      case '+' : return $a + $b;
      case '-' : return $a - $b;
      case '/' : return $a / $b;
      case '*' : return $a * $b;
      default: return "unknown value";
   }
}


function calculator($a, $b, $sign) {
   if(!(is_string($b) || is_string($a))){
      if($sign == "+") return $a + $b;
      if($sign == "-") return $a - $b;
      if($sign == "*") return $a * $b;
      if($sign == "/") return $a / $b;
   }
   return "unknown value";
}


print_r(calculator(6, 2, "/") . ' ' . 3 . '
');
print_r(calculator(6, 2, "$") . " unknown value
");
print_r(calculator(6, "h", "*") . " unknown value
");