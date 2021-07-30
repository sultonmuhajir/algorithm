function reverseSeq(n) {
   let res = []
   for (let i = 1; i <= n; i++) {
      res.push(i)
   }
   return res.reverse()
}


const reverseSeq = length => Array.from({
   length
}, () => length--)


const reverseSeq = n => {
   return Array(n).fill(0).map((e, i) => n - i);
}


const reverseSeq = n => {
   return Array.from({
      length: n
   }, (_, i) => n - i);
}


const reverseSeq = n => {
   if (n < 2) return [n]
   return [n].concat(reverseSeq(n - 1));
}


console.log(reverseSeq(5), [5, 4, 3, 2, 1]);