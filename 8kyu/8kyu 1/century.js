const century = year => Math.ceil(year / 100);


function century(year) {
   return Math.ceil(year / 100);
}


function century(year) {
   let century = 0;
   for (let i = 0; i < year; i++) {
      if (i % 100 == 0) {
         century++;
      }
   }
   return century;
}


console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');
