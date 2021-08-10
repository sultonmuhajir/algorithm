<?php
/*
|--------------------------------------------------------------------------
| Beginner Series #1 School Paperwork
|--------------------------------------------------------------------------
|
*/

function paperwork(int $n, int $m)
{
   return $n < 0 || $m < 0 ? 0 : $n * $m;
}


function paperwork(int $n, int $m): int
{
  return max(0, $n) * max(0, $m);
}


function paperwork(int $n, int $m): int
{
   return $n > 0 ? ($m > 0 ? $n*$m : 0) : 0;
}


echo(paperwork(5, 5)), '
';
echo(paperwork(5, 0)), '
';