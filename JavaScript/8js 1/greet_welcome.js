/*
|--------------------------------------------------------------------------
| Welcome!
|--------------------------------------------------------------------------
|
*/

function greet(language) {
   const db = {
      english: "Welcome",
      czech: "Vitejte",
      danish: "Velkomst",
      dutch: "Welkom",
      estonian: "Tere tulemast",
      finnish: "Tervetuloa",
      flemish: "Welgekomen",
      french: "Bienvenue",
      german: "Willkommen",
      irish: "Failte",
      italian: "Benvenuto",
      latvian: "Gaidits",
      lithuanian: "Laukiamas",
      polish: "Witamy",
      spanish: "Bienvenido",
      swedish: "Valkommen",
      welsh: "Croeso",
   };
   return db[language] != undefined ? db[language] : "Welcome";
}


function greet(language) {
   return db[language] || "Welcome";
}


function greet(language) {
   return language in db ? db[language] : "Welcome";
}


console.log(greet("dutch"), "Welkom");
console.log(greet("english"), "Welcome");
console.log(greet("IP_ADDRESS_INVALID"), "Welcome");