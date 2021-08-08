/*
|--------------------------------------------------------------------------
| Basic variable assignment
|--------------------------------------------------------------------------
|
*/

const a = "code";
const b = "wa.rs";
const name = a + b;


const name = 'codewa.rs';


const name = [
      1100011,
      1101111,
      1100100,
      1100101,
      1110111,
      1100001,
      101110,
      1110010,
      1110011
   ]
   .map(x => x + '')
   .map(x => parseInt(x, 2))
   .map(x => String.fromCharCode(x))
   .join('')


console.log(name, "codewa.rs");