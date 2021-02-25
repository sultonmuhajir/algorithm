function solution(str) {
   const split = str.split("");
   const reverse = split.reverse();
   return reverse.join("");
}


function solution(str) {
   return str.split('').reverse().join('');
}


const solution = str => str.split('').reverse().join('');


console.log(solution('world'), 'dlrow')
console.log(solution('hello'), 'olleh')
console.log(solution(''), '')
console.log(solution('h'), 'h')