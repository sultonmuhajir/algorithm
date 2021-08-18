<?php
/*
|--------------------------------------------------------------------------
| Short Long Short
|--------------------------------------------------------------------------
|
*/

function shortLongShort(string $s1, string $s2): string
{
	return strlen($s1) < strlen($s2) ? $s1 . $s2 . $s1 : $s2 . $s1 . $s2;
}


function shortLongShort(string $s1, string $s2): string
{
	return [$s1,$s2][$i=strlen($s1)>strlen($s2)] . [$s1,$s2][!$i] . [$s1,$s2][$i];
}


function shortLongShort(string $s1, string $s2): string
{
	return (strlen($s1) < strlen($s2))? "$s1$s2$s1" : "$s2$s1$s2";
}


function shortLongShort(string $s1, string $s2): string
{
	$short = strlen($s1) > strlen($s2) ? $s2 : $s1;
	$long = strlen($s1) < strlen($s2) ? $s2 : $s1;
	return $short . $long . $short;
}


print_r(shortLongShort('45', '1'). ' 1451
');
print_r(shortLongShort('13', '200'). ' 1320013
');
print_r(shortLongShort('Soon', 'Me'). ' MeSoonMe
');
print_r(shortLongShort('U', 'False'). ' UFalseU
');