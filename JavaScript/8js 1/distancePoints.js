/*
|--------------------------------------------------------------------------
| Geometry Basics: Distance between points in 2D
|--------------------------------------------------------------------------
|
*/

function distanceBetweenPoints(a, b) {
   return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}


const distanceBetweenPoints = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => Math.hypot(x1 - x2, y1 - y2);


function distanceBetweenPoints(a, b) {
   return Math.hypot(a.x - b.x, a.y - b.y);
}