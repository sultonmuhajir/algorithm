<?php
/*
|--------------------------------------------------------------------------
| Parse nice int from char problem
|--------------------------------------------------------------------------
|
*/

function getAge($response) {
   return intval(explode(' ', $response)[0]);
}


use function intval as getAge;


function getAge($response) {
   return $response[0];
}


function getAge($response) {
   return +$response;
}


function getAge($response) {
   return number_format($response);
}


print_r(getAge("2 years old") . ' ' . 2);