<?php
/*
|--------------------------------------------------------------------------
| Convert a Number to a String!
|--------------------------------------------------------------------------
|
*/

function numberToString($num)
{
   return strval($num);
}


function numberToString( string $n ) : string {
   return (string) $n;
}


function numberToString($num)
{
   return "$num";
}


print_r(numberToString(67), ' 67');