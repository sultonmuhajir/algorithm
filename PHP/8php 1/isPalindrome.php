<?php
/*
|--------------------------------------------------------------------------
| Is it a palindrome?
|--------------------------------------------------------------------------
|
*/

function isPalindrome(string $str): bool {
   return strtolower($str) == strtolower(strrev($str));
}


function isPalindrome(string $str): bool {
   $front = '';
   $back = '';
   $str = strtolower($str);
   for ($i = 0; $i < strlen($str); $i++) {
      $front .= $str[$i];
      $back  .= $str[- ($i + 1)];
   }
   return $front === $back;
}


function isPalindrome(string $str): bool {
   return !strcasecmp($str, strrev($str));
}


print_r(isPalindrome("a") . ' ' . true . '
');
print_r(isPalindrome("aba") . ' ' . true . '
');
print_r(isPalindrome("Abba") . ' ' . true . '
');
print_r(isPalindrome("hello") . ' ' . false . '
');
print_r(isPalindrome("Bob") . ' ' . true . '
');
print_r(isPalindrome("Madam") . ' ' . true . '
');
print_r(isPalindrome("AbBa") . ' ' . true . '
');
print_r(isPalindrome("") . ' ' . true . '
');