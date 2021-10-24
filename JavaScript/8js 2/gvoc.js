/*
|--------------------------------------------------------------------------
| Volume of a Cuboid
|--------------------------------------------------------------------------
|
*/

function getVolumeOfCuboid(length, width, height) {
   return length * width * height;
}


const Kata = {
   getVolumeOfCuboid: (length, width, height) => length * width * height
}


const Kata = (() => {
   this.getVolumeOfCuboid = (l, w, h) => l * w * h;
   return this;
})();


const Kata = {
   getVolumeOfCuboid(length, width, height) {
      return length * width * height
   }
}


console.log(getVolumeOfCuboid(1, 2, 2), 4);
console.log(getVolumeOfCuboid(6.3, 2, 5), 63);