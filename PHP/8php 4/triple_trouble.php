<?php
/*
|--------------------------------------------------------------------------
| Triple Trouble
|--------------------------------------------------------------------------
|
*/

function triple_trouble(string $one, string $two, string $three): string {
   $res = '';
   for ($i=0; $i < strlen($one); $i++) { 
      $res .= "$one[$i]$two[$i]$three[$i]";
   }
   return $res;
}


function triple_trouble(string $one, string $two, string $three): string {
   return implode(array_merge(...array_map(null, str_split($one), str_split($two), str_split($three))));
}


function triple_trouble(string $one, string $two, string $three): string {
   if ($one == "") return "";
   return $one[0] . $two[0] . $three[0] . triple_trouble(substr($one, 1), substr($two, 1), substr($three, 1));
}


function triple_trouble(string $one, string $two, string $three): string {
   $result = '';
   $i = 0;
   while (isset($one[$i])) {
      $result .= $one[$i] . $two[$i] . $three[$i];
      $i++;
   }  
   return $result;
}


print_r(triple_trouble("aaa", "bbb", "ccc") . " abcabcabc
");
print_r(triple_trouble("aaaaaa", "bbbbbb", "cccccc") . " abcabcabcabcabcabc
");
print_r(triple_trouble("burn", "reds", "roll") . " brrueordlnsl
");
print_r(triple_trouble("Sea", "urn", "pms") . " Supermans
");
print_r(triple_trouble("LLh", "euo", "xtr") . " LexLuthor
");