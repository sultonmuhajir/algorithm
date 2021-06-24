function removeChar(str) {
   const array = str.split("");
   const result = [];
   for (i = 0; i < array.length; i++) {
      if (i != 0 && i != (array.length - 1)) {
         result.push(array[i]);
      }
   }
   return result.join("");
};


function removeChar(str) {
   return str.slice(1, -1);
}


const removeChar = str => str.slice(1, -1)


console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
