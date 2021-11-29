<?php
/*
|--------------------------------------------------------------------------
| L1: Bartender, drinks!
|--------------------------------------------------------------------------
|
*/

function get_drink_by_profession(string $s): string {
   $x = strtolower($s);
   if ($x == "jabroni") {
      return "Patron Tequila";
   } else if ($x == "school counselor") {
      return "Anything with Alcohol";
   } else if ($x == "programmer") {
      return "Hipster Craft Beer";
   } else if ($x == "bike gang member") {
      return "Moonshine";
   } else if ($x == "politician") {
      return "Your tax dollars";
   } else if ($x == "rapper") {
      return "Cristal";
   } else {
      return "Beer";
   }
}


function get_drink_by_profession(string $s): string {
   return [ 
      "jabroni" =>"Patron Tequila",
      "school counselor"=>"Anything with Alcohol",  
      "programmer"=>"Hipster Craft Beer",
      "bike gang member"=>"Moonshine",
      "politician"=>"Your tax dollars",
      "rapper"=>"Cristal"
   ][strtolower($s)]??"Beer";
}


function get_drink_by_profession(string $s): string {
   return match(strtolower($s)) {
      "jabroni"           => "Patron Tequila",
      "school counselor"  => "Anything with Alcohol",
      "programmer"        => "Hipster Craft Beer",
      "bike gang member"  => "Moonshine",
      "politician"        => "Your tax dollars",
      "rapper"            => "Cristal",
      default             => "Beer"
   };
}


function get_drink_by_profession(string $s): string {
   return key_exists( $s = ucwords( strtolower( $s ) ), $array = [
      "Jabroni"           => "Patron Tequila", 
      "Bike Gang Member"  => "Moonshine",
      "School Counselor"  => "Anything with Alcohol", 
      "Programmer"        => "Hipster Craft Beer",
      "Politician"        => "Your tax dollars",
      "Rapper"            => "Cristal"
   ]) ? $array[$s] : "Beer";
}


print_r(get_drink_by_profession("jabrOni") . " Patron Tequila
");
print_r(get_drink_by_profession("scHOOl counselor") . " Anything with Alcohol
");
print_r(get_drink_by_profession("prOgramMer") . " Hipster Craft Beer
"); 