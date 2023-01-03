<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #261: Whose Move
|--------------------------------------------------------------------------
|
*/

function whose_move(string $last_player, bool $win): string {
   return $last_player == "black" && $win == false || $last_player == "white" && $win == true ? "white" : "black";
}


function whose_move(string $last_player, bool $win): string {
   return $win ? $last_player : ($last_player == 'black' ? 'white' : 'black');
}


function whose_move(string $last_player, bool $win): string {
   return $win ? $last_player : ['black' => 'white', 'white' => 'black'][$last_player];
}


function whose_move(string $last_player, bool $win): string {
   return $win ? "$last_player" : str_replace($last_player, "", "blackwhite");
}


print_r(whose_move("black", false) . " white
");
print_r(whose_move("white", true) . " white
");
print_r(whose_move("white", false) . " black
");