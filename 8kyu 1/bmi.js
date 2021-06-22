function bmi(weight, height) {
   const bmi = weight / (height ** 2);
   return bmi <= 18.5 ? "Underweight" : bmi <= 25.0 ? "Normal" : bmi <= 30.0 ? "Overweight" : "Obese";
}


const bmi = (w, h) => (w = w / h / h) > 30 ? 'Obese' : w > 25 ? 'Overweight' : w > 18.5 ? 'Normal' : 'Underweight';


function bmi(weight, height) {
   let bmi = weight / (height * height);
   switch (true) {
      case bmi <= 18.5:
         return "Underweight";
      case bmi <= 25.0:
         return "Normal";
      case bmi <= 30.0:
         return "Overweight";
      case bmi > 30:
         return "Obese";
   }
}


console.log(bmi(80, 1.80), "Normal");
console.log(bmi(70, 1.70), "Normal");
console.log(bmi(80, 1.60), "Obase");