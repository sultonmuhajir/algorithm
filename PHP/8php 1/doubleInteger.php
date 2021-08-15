<?php
/*
|--------------------------------------------------------------------------
| You Can't Code Under Pressure #1
|--------------------------------------------------------------------------
|
*/

function doubleInteger($i)
{
   return $i * 2;
}


function doubleInteger($i)
{
   return $i << 1;
}


function doubleInteger($i)
{
   return array_sum(array_fill(0,2, $i));
}


function doubleInteger($i)
{
   return $i+=$i;
}


print_r(doubleInteger(2). ' ' . 4);