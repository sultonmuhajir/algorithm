<?php
/*
|--------------------------------------------------------------------------
| Function 1 - hello world
|--------------------------------------------------------------------------
|
*/

function greet()
{
   return "hello world!";
}


function greet(): string {
   return 'hello world!';
}


function greet() {
   return strrev("!dlrow olleh");
}


function greet() {
   return implode('', array_map(function($item) {
         return chr($item);
      }, [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33]
   ));
}


function greet() {
   return implode('', array_map(function ($a) { return chr($a); }, explode('7', '104710171087108711173271197111711471087100733')));
}


print_r(greet(). ' hello world!');