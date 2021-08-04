const min = function (list) {
   return Math.min(...list);
}
const max = function (list) {
   return Math.max(...list);
}


const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


const min = function (list) {
   return Math.min.apply(null, list);
}
const max = function (list) {
   return Math.max.apply(null, list);
}


const min = list => list.sort((a, b) => a - b)[0];
const max = list => list.sort((a, b) => b - a)[0];


for (var [key, value] in Object.getOwnPropertyNames(Math)) eval(`var ${Object.getOwnPropertyNames(Math)[key]} = a => Math.${Object.getOwnPropertyNames(Math)[key]}(...a);`);


console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
console.log(max([5]), 5);