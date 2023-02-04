/*
|--------------------------------------------------------------------------
| Last Survivor
|--------------------------------------------------------------------------
|
*/

function lastSurvivor(letters, coords) {
   coords.forEach((i) => {
      letters = letters.slice(0, i) + letters.slice(i + 1);
   });
   return letters;
}


function lastSurvivor(letters, coords) {
   return coords.reduce(
      (letters, coord) => letters.slice(0, coord) + letters.slice(coord + 1),
      letters
   );
}


function lastSurvivor(letters, coords) {
   const arr = [...letters];
   coords.map((el, i, ar) => arr.splice(el, 1));
   return arr[0];
}


console.log(lastSurvivor("abc", [1, 1]), "a");