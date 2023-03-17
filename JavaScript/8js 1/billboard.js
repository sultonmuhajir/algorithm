/*
|--------------------------------------------------------------------------
| Name on billboard
|--------------------------------------------------------------------------
|
*/

function billboard(name, price = 30) {
   let res = 0;
   for (let i = 0; i < name.length; i++) res += price;
   return res;
}


function billboard(name, price = 30) {
   return name.length / (1 / price);
}


function billboard(name, price = 30) {
   return [...name].reduce((pre) => pre + price, 0);
}


function billboard(name, price = 30) {
   return name.repeat(price).length;
}


console.log(billboard("Jeong-Ho Aristotelis"), 600);
console.log(billboard("Abishai Charalampos"), 570);
console.log(billboard("Idwal Augustin"), 420);
console.log(billboard("Hadufuns John", 20), 260);
console.log(billboard("Zoroaster Donnchadh"), 570);
console.log(billboard("Claude Miljenko"), 450);
console.log(billboard("Werner Vígi", 15), 165);
console.log(billboard("Anani Fridumar"), 420);
console.log(billboard("Paolo Oli"), 270);
console.log(billboard("Hjalmar Liupold", 40), 600);
console.log(billboard("Simon Eadwulf"), 390);