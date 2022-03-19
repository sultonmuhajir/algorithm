/*
|--------------------------------------------------------------------------
| Determine offspring sex based on genes XX and XY chromosomes
|--------------------------------------------------------------------------
|
*/

function chromosomeCheck(sperm) {
   return sperm == "XY" ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}


function chromosomeCheck(sperm) {
   return `Congratulations! You're going to have a ${sperm == 'XY' ? 'son' : 'daughter'}.`
}


function chromosomeCheck(sperm) {
   return "Congratulations! You're going to have a " + (sperm == 'XY' ? 'son' : 'daughter') + '.';
}


function chromosomeCheck(sperm) {
   return `Congratulations! You're going to have a ${/Y/.test(sperm) ? 'son.' : 'daughter.'}`;
}


console.log(chromosomeCheck('XY'), "Congratulations! You're going to have a son.")
console.log(chromosomeCheck('XX'), "Congratulations! You're going to have a daughter.")