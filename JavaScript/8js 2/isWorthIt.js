/*
|--------------------------------------------------------------------------
| OOP: Object Oriented Piracy
|--------------------------------------------------------------------------
|
*/

function Ship(draft, crew) {
   this.draft = draft;
   this.crew = crew;
}
Ship.prototype.isWorthIt = function () {
   return this.draft - this.crew * 1.5 > 20;
}


class Ship {
   constructor(draft, crew) {
      this.draft = draft;
      this.crew = crew;
   }
   isWorthIt() {
      return this.draft - this.crew * 1.5 > 20;
   }
}


function Ship(draft, crew) {
   this.draft = draft;
   this.crew = crew;

   this.isWorthIt = function () {
      return this.draft - this.crew * 1.5 > 20;
   };
}