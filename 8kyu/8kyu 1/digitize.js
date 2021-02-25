const digitize = n => n.toString().split("").map(Number).reverse();


function digitize(n) {
   return n.toString().split("").map(Number).reverse();
}


function digitize(n) {
   return Array.from(String(n), Number).reverse();
}


console.log(digitize(35231), [1, 3, 2, 5, 3]);