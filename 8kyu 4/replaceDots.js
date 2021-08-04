const replaceDots = function (str) {
   return str.split(".").join("-")
}


var replaceDots = function (str) {
   return str.replace(/\./g, '-');
}


var replaceDots = function (str) {
   let answer = "";
   for (let i = 0; i < str.length; i++) {
      answer += (str[i] !== ".") ? str[i] : "-";
   }
   return answer;
}


var replaceDots = function (str) {
   return str.replace(/[.]/g, '-');
}


console.log(replaceDots("one.two.three"), "one-two-three", "Sorry, try again :-(");