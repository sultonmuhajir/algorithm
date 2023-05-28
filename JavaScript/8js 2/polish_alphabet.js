/*
|--------------------------------------------------------------------------
| Polish alphabet
|--------------------------------------------------------------------------
|
*/

function correctPolishLetters(string) {
   let x = {
      ą: "a",
      ć: "c",
      ę: "e",
      ł: "l",
      ń: "n",
      ó: "o",
      ś: "s",
      ź: "z",
      ż: "z",
   };
   return string
      .split("")
      .map((i) => x[i] || i)
      .join("");
}


function correctPolishLetters(s) {
   return s.replace(/[ąćęłńóśźż]/g, (c) => "acelnoszz"["ąćęłńóśźż".indexOf(c)]);
}


console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie");