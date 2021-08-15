<?php
/*
|--------------------------------------------------------------------------
| Jenny's secret message
|--------------------------------------------------------------------------
|
*/

function greet($name) {
   return $name == 'Johnny' ? 'Hello, my love!' : "Hello, {$name}!";
}


function greet($name) {
   if ($name == 'Johnny') {
      return 'Hello, my love!';
   } else {
      return "Hello, $name!";    
   }
}


function greet(string $name): string {
   return sprintf('Hello, %s!', $name === 'Johnny' ? 'my love' : $name);
}


print_r(greet("Jim"). " Hello, Jim!
");
print_r(greet("Jane"). " Hello, Jane!
");
print_r(greet("Simon"). " Hello, Simon!
");
print_r(greet("Johnny"). " Hello, my love!
");