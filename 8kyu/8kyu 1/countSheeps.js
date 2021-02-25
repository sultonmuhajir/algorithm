const countSheeps = arr => arr.filter(item => item == true).length;


function countSheeps(arrayOfSheep) {
   return arrayOfSheep.filter(item => item == true).length;
}


function countSheeps(arrayOfSheep) {
   let num = 0;
   for (let i = 0; i < arrayOfSheep.length; i++)
      if (arrayOfSheep[i] == true) {
         num++;
      }
   return num;
}


const array1 = [true, true, true, false,
   true, true, true, true,
   true, false, true, false,
   true, false, false, true,
   true, true, true, true,
   false, false, true, true
];
console.log(countSheeps(array1) == 17, "There are 17 sheeps in total")