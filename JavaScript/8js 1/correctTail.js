/*
|--------------------------------------------------------------------------
| Is this my tail?
|--------------------------------------------------------------------------
|
*/

function correctTail(body, tail) {
   return body[body.length - 1] == tail
}


function correctTail(body, tail) {
   return body.substr(-1) == tail;
}


function correctTail(body, tail) {
   return body.split("").reverse()[0] === tail;
}


function correctTail(body, tail) {
   return body.slice(-1) == tail
}


console.log(correctTail("Fox", "x"), true);
console.log(correctTail("Rhino", "o"), true);
console.log(correctTail("Meerkat", "t"), true);