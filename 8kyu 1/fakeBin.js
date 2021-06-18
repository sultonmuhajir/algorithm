function fakeBin(x) {
   let res = "";
   for (let i = 0; i < x.length; i++) {
      res += Number(x[i]) < 5 ? "0" : "1";
   }
   return res;
}


function fakeBin(x) {
   return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


function fakeBin(x) {
   return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}


function fakeBin(x) {
   return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1")
}


function fakeBin(x) {
   return x.replace(/./g, d => +(d >= 5));
}


console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101');
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');