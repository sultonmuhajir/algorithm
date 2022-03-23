<?php
/*
|--------------------------------------------------------------------------
| Rock Paper Scissors!
|--------------------------------------------------------------------------
|
*/

function rpc ($p1, $p2) {
   if (($p1 == 'scissors' && $p2 == 'paper') || ($p1 == 'paper' && $p2 == 'rock') || ($p1 == 'rock' && $p2 == 'scissors')) {
      return 'Player 1 won!';
   } else if (($p2 == 'scissors' && $p1 == 'paper') || ($p2 == 'paper' && $p1 == 'rock') || ($p2 == 'rock' && $p1 == 'scissors')) {
      return 'Player 2 won!';
   } else {
      return 'Draw!';
   }
}


function rpc ($p1, $p2) {
   $beat = [
      'rock'     => 'scissors',
      'paper'    => 'rock',
      'scissors' => 'paper',
   ];
   if ($p1 === $p2) {
      return 'Draw!';
   }
   return 'Player ' . ($beat[$p1] === $p2 ? '1' : '2') . ' won!';
}


function rpc($p1, $p2) {
   $power = ['scissors' => 'paper', 'paper' => 'rock', 'rock' => 'scissors'];
   $winner = ($power[$p2] == $p1) + 1;
   return $p1 == $p2 ? 'Draw!' : "Player {$winner} won!";
}


function rpc ($p1, $p2) {
   if ($p1 == $p2) return "Draw!";
   return "Player ".mt_rand(1,2)." won!";
}


function rpc ($p1, $p2) {
   $rps = [
      'scissors'  => "paper", 
      "paper"     => "rock", 
      "rock"      => "scissors"
   ];
   return $p1 == $p2 ? "Draw!" : ( $rps[$p1] == $p2 ? "Player 1 won!" : "Player 2 won!" );
}


print_r(rpc('scissors', 'paper'). ' Player 1 won!
');
print_r(rpc('scissors', 'rock'). ' Player 2 won!
');
print_r(rpc('paper', 'paper'). ' Draw!
');