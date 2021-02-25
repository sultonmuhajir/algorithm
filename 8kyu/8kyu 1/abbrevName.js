function abbrevName(name) {
   const arr = name.split(" ");
   let result = [];
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
         if (j == 0) {
            result.push(arr[i][j].toUpperCase());
         }
      }
   }
   return result.join(".");
}


function abbrevName(name) {
   return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}


const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()


console.log(abbrevName("Sam Harris Oke"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");