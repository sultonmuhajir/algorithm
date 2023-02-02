/*
|--------------------------------------------------------------------------
| Regular Ball Super Ball
|--------------------------------------------------------------------------
|
*/

class Ball {
   constructor(ballType = "regular") {
      this.ballType = ballType;
   }
}


const Ball = function (ballType = "regular") {
   this.ballType = ballType;
};


const Ball = function (ballType) {
   this.ballType = ballType || "regular";
};


console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");