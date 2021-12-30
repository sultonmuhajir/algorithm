/*
|--------------------------------------------------------------------------
| Student's Final Grade
|--------------------------------------------------------------------------
|
*/

function finalGrade(exam, projects) {
   if (exam > 90 || projects > 10) {
      return 100;
   } else if (exam > 75 && projects >= 5) {
      return 90;
   } else if (exam > 50 && projects >= 2) {
      return 75;
   } else {
      return 0
   }
}


const finalGrade = (exam, projects) => exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;


const finalGrade = (exam, projects) => {
   return (
      exam > 90 || projects > 10 ? 100 :
      exam > 75 && projects >= 5 ? 90 :
      exam > 50 && projects >= 2 ? 75 : 0
   )
}


const finalGrade = (exam, projects) => {
   switch (true) {
      case (exam > 90 || projects > 10):
         return 100
         break;
      case (exam > 75 && projects >= 5):
         return 90;
         break;
      case (exam > 50 && projects >= 2):
         return 75
         break;
      case (exam <= 55 || projects <= 2):
         return 0;
         break;

   }
}


console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);
console.log(finalGrade(0, 11), 100);