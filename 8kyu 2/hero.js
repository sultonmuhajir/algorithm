/*
|--------------------------------------------------------------------------
| Is he gonna survive?
|--------------------------------------------------------------------------
|
*/

const hero = (bullets, dragons) => bullets / 2 >= dragons;


function hero(bullets, dragons) {
   return bullets >= dragons * 2
}


function hero(bullets, dragons) {
   return (bullets / 2 >= dragons) ? true : false;
}


console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);