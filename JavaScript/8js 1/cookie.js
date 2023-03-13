/*
|--------------------------------------------------------------------------
| Who ate the cookie?
|--------------------------------------------------------------------------
|
*/

function cookie(x) {
   let name = typeof x == "string" ? "Zach" : typeof x == "number" ? "Monica" : "the dog";
   return `Who ate the last cookie? It was ${name}!`;
}


function cookie(x) {
   return `Who ate the last cookie? It was ${
      { string: "Zach", number: "Monica" }[typeof x] || "the dog"
   }!`;
}


function cookie(x) {
   let resultString = "Who ate the last cookie? It was ";
   switch (typeof x) {
      case "string":
         return (resultString += "Zach!");
      case "number":
         return (resultString += "Monica!");
      default:
         return (resultString += "the dog!");
   }
}


console.log(cookie("Ryan"), "Who ate the last cookie? It was Zach!");
console.log(cookie(26), "Who ate the last cookie? It was Monica!");
console.log(cookie(2.3), "Who ate the last cookie? It was Monica!");
console.log(cookie(true), "Who ate the last cookie? It was the dog!");