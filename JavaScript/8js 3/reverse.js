/*
|--------------------------------------------------------------------------
| Reversing Words in a String
|--------------------------------------------------------------------------
|
*/

function reverse(string) {
   return string.split(' ').reverse().join(' ')
}


function reverse(string) {
   let res = [];
   let arr = string.split(' ');
   for (let i = arr.length - 1; i > -1; i--) {
      res.push(arr[i]);
   }
   return res.join(' ');
}


function reverse(string) {
   return (s.match(/\w+(?:\b)*/gmi) || []).reverse().join(' ');
}


function reverse(string) {
   let res = []
   let words = string.split(' ')
   while (words.length != 0) {
      res.push(words.pop())
   }
   return res.join(' ')
}


console.log(reverse('I am an expert at this'), 'this at expert an am I');
console.log(reverse('This is so easy'), 'easy so is This');
console.log(reverse('no one cares'), 'cares one no');
console.log(reverse(''), '');
console.log(reverse('CodeWars'), 'CodeWars');