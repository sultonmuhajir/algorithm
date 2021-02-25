function even_or_odd(number) {
   return number % 2 == 0 ? "Even" : "Odd"
}


function even_or_odd(number) {
   if (number % 2 == 0) {
      return "Even";
   } else {
      return "Odd";
   }
}


const even_or_odd = number => number % 2 ? 'Odd' : 'Even';


console.log(even_or_odd(-3), "Even")
console.log(even_or_odd(0), "Even")
console.log(even_or_odd(7), "Odd")
console.log(even_or_odd(1), "Odd")