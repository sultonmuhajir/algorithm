/*
|--------------------------------------------------------------------------
| Color Ghost
|--------------------------------------------------------------------------
|
*/

function Ghost() {
   const colors = ["white", "yellow", "purple", "red"];
   this.color = colors[Math.floor(Math.random() * colors.length)];
}


class Ghost {
   constructor() {
      this.color = [`red`, `yellow`, `purple`, `white`][(Math.random() * 4) ^ 0];
   }
}


const Ghost = function () {
   this.color = ["white", "yellow", "purple", "red"][Math.floor(Math.random() * 4)];
};