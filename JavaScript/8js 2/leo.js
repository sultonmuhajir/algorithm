/*
|--------------------------------------------------------------------------
| Leonardo Dicaprio and Oscars
|--------------------------------------------------------------------------
|
*/

function leo(oscar) {
   return oscar == 88
      ? "Leo finally won the oscar! Leo is happy"
      : oscar == 86
      ? "Not even for Wolf of wallstreet?!"
      : oscar < 88
      ? "When will you give Leo an Oscar?"
      : "Leo got one already!";
}


function leo(oscar){
   switch(true) {
      case oscar > 88: return "Leo got one already!"; break;
      case oscar == 88: return "Leo finally won the oscar! Leo is happy"; break;
      case oscar == 86: return "Not even for Wolf of wallstreet?!"; break;
      default: return "When will you give Leo an Oscar?"
   }
}


function leo(o){
   if (o >= 89) return "Leo got one already!";
   if (o == 88) return "Leo finally won the oscar! Leo is happy";
   if (o == 87 || o < 86) return "When will you give Leo an Oscar?";
   if (o == 86) return "Not even for Wolf of wallstreet?!";
}


console.log(leo(89), "Leo got one already!");
console.log(leo(88), "Leo finally won the oscar! Leo is happy");
console.log(leo(87), "When will you give Leo an Oscar?");
console.log(leo(86), "Not even for Wolf of wallstreet?!");