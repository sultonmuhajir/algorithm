/*
|--------------------------------------------------------------------------
| Training JS #18: Methods of String object--concat() split() and its good friend join()
|--------------------------------------------------------------------------
|
*/

function splitAndMerge(string, separator) {
   return string
      .split(" ")
      .map((i) => i.split("").join(separator))
      .join(" ");
}


const splitAndMerge = (s, d) => s.replace(/\S(?=\S)/g, (c) => c + d);


function splitAndMerge(str, sp) {
   return str.replace(/\S+/g, (w) => w.replace(/.(?=.)/g, "$&" + sp));
}


console.log(splitAndMerge("My name is John", " "), "M y n a m e i s J o h n");
console.log(splitAndMerge("My name is John", "-"), "M-y n-a-m-e i-s J-o-h-n");
console.log(splitAndMerge("Hello World!", "."), "H.e.l.l.o W.o.r.l.d.!");
console.log(splitAndMerge("Hello World!", ","), "H,e,l,l,o W,o,r,l,d,!");