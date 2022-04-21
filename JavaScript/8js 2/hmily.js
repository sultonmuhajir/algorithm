/*
|--------------------------------------------------------------------------
| I love you, a little , a lot, passionately ... not at all
|--------------------------------------------------------------------------
|
*/

function howMuchILoveYou(nbPetals) {
   const mod = nbPetals % 6
   if (mod == 1) {
      return 'I love you';
   } else if (mod == 2) {
      return 'a little';
   } else if (mod == 3) {
      return 'a lot';
   } else if (mod == 4) {
      return 'passionately';
   } else if (mod == 5) {
      return 'madly';
   } else {
      return 'not at all';
   }
}


function howMuchILoveYou(nbPetals) {
   return ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'][nbPetals % 6]
}


function howMuchILoveYou(nbPetals) {
   let phrase = {
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly"
   }
   return phrase[nbPetals % 6]
}


console.log(howMuchILoveYou(7), "I love you")
console.log(howMuchILoveYou(3), "a lot")
console.log(howMuchILoveYou(6), "not at all")