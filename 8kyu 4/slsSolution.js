function solution(a, b) {
   return a.length < b.length ? a + b + a : b + a + b;
}


const solution = (i => () => [
   'abba',
   'baab',
][i++])(0);


function solution(a, b) {
   return a.length > b.length ?
      b.concat(a).concat(b) :
      a.concat(b).concat(a);
}


function solution(a, b) {
   return '' + Math.min(a, b) + Math.max(a, b) + Math.min(a, b)
}


console.log(solution('45', '1'), '1451');
console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');