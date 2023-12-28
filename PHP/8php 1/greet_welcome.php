<?php
/*
|--------------------------------------------------------------------------
| Welcome!
|--------------------------------------------------------------------------
|
*/

function greet(string $language): string {
   $db = [
      'english' => 'Welcome',
      'czech' => 'Vitejte',
      'danish' => 'Velkomst',
      'dutch' => 'Welkom',
      'estonian' => 'Tere tulemast',
      'finnish' => 'Tervetuloa',
      'flemish' => 'Welgekomen',
      'french' => 'Bienvenue',
      'german' => 'Willkommen',
      'irish' => 'Failte',
      'italian' => 'Benvenuto',
      'latvian' => 'Gaidits',
      'lithuanian' => 'Laukiamas',
      'polish' => 'Witamy',
      'spanish' => 'Bienvenido',
      'swedish' => 'Valkommen',
      'welsh' => 'Croeso',
   ];
   return isset($db[$language]) ? $db[$language] : 'Welcome';
}


function greet(string $language): string {
   return $db[$language] ?? "Welcome";
}


function greet(string $language): string {
   if (array_key_exists($language, $db)) {
      return $db[$language];
   }
   return array_shift($db);
}


print_r(greet("dutch") . " Welkom
");
print_r(greet("english") . " Welcome
");
print_r(greet("IP_ADDRESS_INVALID") . " Welcome
");