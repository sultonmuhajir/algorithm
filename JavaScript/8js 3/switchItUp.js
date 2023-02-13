/*
|--------------------------------------------------------------------------
| Switch it Up!
|--------------------------------------------------------------------------
|
*/

function switchItUp(number) {
   if (number == 1) {
      return 'One'
   } else if (number == 2) {
      return 'Two'
   } else if (number == 3) {
      return 'Three'
   } else if (number == 4) {
      return 'Four'
   } else if (number == 5) {
      return 'Five'
   } else if (number == 6) {
      return 'Six'
   } else if (number == 7) {
      return 'Seven'
   } else if (number == 8) {
      return 'Eight'
   } else if (number == 9) {
      return 'Nine'
   } else {
      return 'Zero'
   }
}


function switchItUp(n) {
   return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n]
}


function switchItUp(number) {
   return 'Zero One Two Three Four Five Six Seven Eight Nine'.split(' ')[number];
}


function switchItUp(number) {
   switch (number) {
      case 0:
         return 'Zero';
      case 1:
         return 'One';
      case 2:
         return 'Two';
      case 3:
         return 'Three';
      case 4:
         return 'Four';
      case 5:
         return 'Five';
      case 6:
         return 'Six';
      case 7:
         return 'Seven';
      case 8:
         return 'Eight';
      case 9:
         return 'Nine';
   }
}


console.log(switchItUp(1), "One");
console.log(switchItUp(3), "Three");
console.log(switchItUp(5), "Five");