function multiTable(number) {
   let res = '';
   for (let i = 1; i <= 10; i++) {
      res += `${i} * ${number} = ${i*number}\n`
   }
   return res.slice(0, -1);
   // return res.trim();
}


const multiTable = n => ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `${i} * ${n} = ${i*n}`)).join('\n')


const multiTable = (n) => {
   const table = []
   for (let i = 1; i <= 10; i++) {
      table.push(`${i} * ${n} = ${i*n}`)
   }
   return table.join('\n')
}


function multiTable(n) {
   return [...Array(10)].map((_, i) => `${i+1} * ${n} = ${n*i+n}`).join('\n')
}


function multiTable(n, i = 1) {
   if (i === 10) {
      return `10 * ${n} = ${n}0`;
   }
   return `${i} * ${n} = ${n * i}\n` + multiTable(n, i + 1);
};


console.log(multiTable(5));
// console.log(multiTable(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');