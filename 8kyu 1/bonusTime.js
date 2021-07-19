function bonusTime(salary, bonus) {
   return bonus ? '\u00A3' + salary * 10 : '\u00A3' + salary;
}


const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;


function bonusTime(salary, bonus) {
   return bonus ? `£${10 * salary}` : `£${salary}`;
}


function bonusTime(salary, bonus) {
   return '£' + salary * (bonus ? 10 : 1);
}


console.log(bonusTime(10000, true), '£100000');
console.log(bonusTime(25000, true), '£250000');
console.log(bonusTime(10000, false), '£10000');
console.log(bonusTime(60000, false), '£60000');
console.log(bonusTime(2, true), '£20');
console.log(bonusTime(78, false), '£78');
console.log(bonusTime(67890, true), '£678900');