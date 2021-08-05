/*
|--------------------------------------------------------------------------
| Reversed Words
|--------------------------------------------------------------------------
|
*/

function reverseWords(str) {
   return str.split(" ").reverse().join(" ");
}


function reverseWords(str) {
   let count_letters = 1;
   let new_string = "";
   for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === ' ' || i == 0) {
         if (i != 0)
            new_string += str.substr(i + 1, count_letters - 1) + ' ';
         else
            new_string += str.substr(i, count_letters);
         count_letters = 1;
      } else
         count_letters++;
   }
   return new_string;
}


function reverseWords(str) {
   let reverse = [];
   let words = str.split(" ");
   for (let i = words.length - 1; i >= 0; i--) {
      reverse.push(words[i]);

   }
   return reverse.join(" ")
}


console.log(reverseWords("hello world!"), "|| world! hello")
console.log(reverseWords("yoda doesn't speak like this"), "|| this like speak doesn't yoda")
console.log(reverseWords("foobar"), "|| foobar")
console.log(reverseWords("kata editor"), "|| editor kata")
console.log(reverseWords("row row row your boat"), "|| boat your row row row")