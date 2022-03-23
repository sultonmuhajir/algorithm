/*
|--------------------------------------------------------------------------
| How many lightsabers do you own?
|--------------------------------------------------------------------------
|
*/

function howManyLightsabersDoYouOwn(name) {
   return name == 'Zach' ? 18 : 0;
}


function howManyLightsabersDoYouOwn(name) {
   return (name === `Zach`) * 18;
}


function howManyLightsabersDoYouOwn(name) {
   return /Zach/i.test(name) ? 18 : 0;
}


console.log(howManyLightsabersDoYouOwn(), 0)
console.log(howManyLightsabersDoYouOwn("Adam"), 0)
console.log(howManyLightsabersDoYouOwn("Zach"), 18)