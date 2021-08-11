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


echo(greet('Jim')), '
';
echo(greet('Jane')), '
';
echo(greet('Simon')), '
';
echo(greet('Johnny')), '
';