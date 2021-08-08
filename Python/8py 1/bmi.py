"""
|--------------------------------------------------------------------------
| Calculate BMI
|--------------------------------------------------------------------------
|
"""

def bmi(weight, height):
   bmi = weight / (height ** 2);
   return 'Underweight' if bmi <= 18.5 else 'Normal' if  bmi <= 25.0 else 'Overweight' if bmi <= 30.0 else 'Obese'


bmi=lambda w,h:next(s for s,t in zip("Obese Overweight Normal Underweight".split(),(30,25,18.5,0))if w/h/h>t)


def bmi(weight, height):
   result = weight / height / height
   return "Underweight Normal Overweight Obese".split()[
         (result > 18.5) +
         (result > 25.0) +
         (result > 30.0)]


def bmi(weight, height):
   b = weight / height ** 2
   return ['Underweight', 'Normal', 'Overweight', 'Obese'][(b > 30) + (b > 25) + (b > 18.5)]


print(bmi(50, 1.80), "Underweight")
print(bmi(80, 1.80), "Normal")
print(bmi(90, 1.80), "Overweight")
print(bmi(110, 1.80), "Obese")
print(bmi(50, 1.50), "Normal")