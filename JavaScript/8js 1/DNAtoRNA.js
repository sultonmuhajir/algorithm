/*
|--------------------------------------------------------------------------
| DNA to RNA Conversion
|--------------------------------------------------------------------------
|
*/

function DNAtoRNA(dna) {
   return dna.replace(/T/g, 'U')
}


const DNAtoRNA = dna => dna.split('').map(i => i == 'T' ? i = 'U' : i).join('');


function DNAtoRNA(dna) {
   return dna.split("T").join("U");
}


function DNAtoRNA(dna) {
   let result = '';
   for (let i = 0; i < dna.length; i++) {
      dna[i] == 'T' ? result += 'U' : result += dna[i];
   }
   return result;
}


console.log(DNAtoRNA("TTTT"), "UUUU")
console.log(DNAtoRNA("GCAT"), "GCAU")
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")