<?php
/*
|--------------------------------------------------------------------------
| Century From Year
|--------------------------------------------------------------------------
|
*/

function centuryFromYear($year)
{
   return ceil($year/100);
}


function centuryFromYear($year) {
   return intdiv($year + 99, 100);
}


function centuryFromYear($year)
{
  return (int)(($year-1)/100+1);
}


function centuryFromYear($year){
   for($y=0,$century=0; $y<$year; $y+=100,$century++){ }
   return $century;
}


function centuryFromYear($year)
{
  return substr($year, 0, -2) + (substr($year, -2) == '00' ? 0 : 1);
}


echo(centuryFromYear(1705)),'
';
echo(centuryFromYear(1900)),'
';
echo(centuryFromYear(1601)),'
';
echo(centuryFromYear(2000)),'
';