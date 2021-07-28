function monkeyCount(n) {
   let res = [];
   for (let i = 1; i <= n; i++) {
      res.push(i)
   }
   return res;
}


const monkeyCount = n => [...Array(n)].map((v, i) => i + 1)


function monkeyCount(n) {
   return Array.from({
      length: n
   }, (_, i) => i + 1)
}


function monkeyCount(n) {
   for (var i = 0, arr = []; i < n; arr.push(++i));
   return arr;
}


function monkeyCount(n) {
   return [...Array(n + 1).keys()].slice(1);
}


console.log(monkeyCount(5), [1, 2, 3, 4, 5]);
console.log(monkeyCount(3), [1, 2, 3]);