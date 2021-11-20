/*
|--------------------------------------------------------------------------
| Grasshopper - Grade book
|--------------------------------------------------------------------------
|
*/

function getGrade(s1, s2, s3) {
   const mean = (s1 + s2 + s3) / 3;
   return mean >= 90 ? 'A' : mean < 90 && mean >= 80 ? 'B' : mean < 80 && mean >= 70 ? 'C' : mean < 70 && mean >= 60 ? 'D' : 'F';
}


const getGrade = (a, b, c) => 'FFFFFFDCBAA'.charAt((a + b + c) / 3 / 10);


function getGrade(s1, s2, s3) {
   let avg = (s1 + s2 + s3) / 3;
   switch (true) {
      case (avg >= 90):
         return 'A';
      case (avg >= 80):
         return 'B';
      case (avg >= 70):
         return 'C';
      case (avg >= 60):
         return 'D';
      default:
         return 'F';
   }
}


function getGrade(s1, s2, s3) {
   const GRADE = ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A', 'A'];
   return GRADE[(s1 + s2 + s3) / 3 / 10 >> 0];
}


function getGrade(s1, s2, s3) {
   return ['F', 'D', 'C', 'B', 'A'][Math.min(Math.max(((s1 + s2 + s3) / 3 / 10 | 0) - 5, 0), 4)]
}


console.log(getGrade(92, 93, 94), 'A')
console.log(getGrade(70, 70, 100), 'B')
console.log(getGrade(70, 70, 70), 'C')
console.log(getGrade(65, 70, 59), 'D')
console.log(getGrade(44, 55, 52), 'F')