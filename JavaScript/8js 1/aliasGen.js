/*
|--------------------------------------------------------------------------
| Crash Override
|--------------------------------------------------------------------------
|
*/

function aliasGen(x, y) {
   return /^[a-z]/i.test(x) && /^[a-z]/i.test(y)
      ? `${firstName[x[0].toUpperCase()]} ${surname[y[0].toUpperCase()]}`
      : "Your name must start with a letter from A - Z.";
}


function aliasGen(f, l) {
   const n1 = firstName[f[0].toUpperCase()];
   const n2 = surname[l[0].toUpperCase()];
   return n1 && n2 ? `${n1} ${n2}` : "Your name must start with a letter from A - Z.";
}


function aliasGen(name, sname) {
   if (+name[0] || +sname[0]) {
      return "Your name must start with a letter from A - Z.";
   }
   return firstName[name[0].toUpperCase()] + " " + surname[sname[0].toUpperCase()];
}


console.log(aliasGen("Mike", "Millington"), "Malware Mike");
console.log(aliasGen("Fahima", "Tash"), "Function T-Rex");
console.log(aliasGen("Daisy", "Petrovic"), "Data Payload");
console.log(aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
console.log(aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");