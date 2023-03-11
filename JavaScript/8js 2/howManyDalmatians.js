/*
|--------------------------------------------------------------------------
| 101 Dalmatians - squash the bugs, not the dogs!
|--------------------------------------------------------------------------
|
*/

function howManyDalmatians(n) {
   return n <= 10 ? "Hardly any" : n <= 50 ? "More than a handful!" : n >= 101 ? "101 DALMATIANS!!!" : "Woah that's a lot of dogs!";
}


function howManyDalmatians(number) {
   const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
   switch (true) {
      case number < 11:
         return dogs[0];
      case number < 51:
         return dogs[1];
      case number < 101:
         return dogs[2];
      default:
         return dogs[3];
   }
}


function howManyDalmatians(n) {
   let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
   let respond = n <= 10 ? dogs[0] : n <= 50 ? dogs[1] : n <= 100 ? dogs[2] : n = 101 ? dogs[3] : dogs[2];
   return respond;
}


function howManyDalmatians(n) {
   let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
   if (n <= 10) {
      return dogs[0];
   } else if (n > 10 && n <= 50) {
      return dogs[1];
   } else if (n === 101) {
      return dogs[3];
   } else {
      return dogs[2];
   }
}


console.log(howManyDalmatians(26), "More than a handful!");
console.log(howManyDalmatians(8), "Hardly any");
console.log(howManyDalmatians(14), "More than a handful!");
console.log(howManyDalmatians(80), "Woah that's a lot of dogs!");
console.log(howManyDalmatians(100), "Woah that's a lot of dogs!");
console.log(howManyDalmatians(101), "101 DALMATIANS!!!");