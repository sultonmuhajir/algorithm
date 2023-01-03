/*
|--------------------------------------------------------------------------
| Drink about
|--------------------------------------------------------------------------
|
*/

function peopleWithAgeDrink(old) {
   return old < 14 ? 'drink toddy' : old < 18 ? 'drink coke' : old < 21 ? 'drink beer' : 'drink whisky';
}


const peopleWithAgeDrink = old =>
   'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky')


const peopleWithAgeDrink = old =>
   `drink ${old < 14 ? `toddy` : old < 18 ? `coke` : old < 21 ? `beer` : `whisky`}`;


const peopleWithAgeDrink = a => {
   let drink = ['toddy', 'coke', 'beer', 'whisky'],
      n = a > 20 ? 3 : a > 17 ? 2 : a > 13 ? 1 : 0;
   return `drink ${drink[n]}`
}


console.log(peopleWithAgeDrink(22), 'drink whisky');