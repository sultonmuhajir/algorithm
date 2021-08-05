/*
|--------------------------------------------------------------------------
| Total amount of points
|--------------------------------------------------------------------------
|
*/

function points(games) {
   let res = 0;
   games.forEach(i => {
      let score = i.split(':')
      res += score[0] > score[1] ? 3 : score[0] == score[1] ? 1 : 0;
   });
   return res;
}


const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)


function points(games) {
   return games.map(x => x[0] - x[2])
      .filter(x => x >= 0)
      .reduce((a, b) => a + (b > 0 ? 3 : 1), 0);
}


const points = games => games.reduce((output, current) => {
   return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)


function points(games) {
   return games.map(el => +el[0] > +el[2] ? 3 : +el[0] === +el[2] ? 1 : 0).reduce((a, b) => a + b, 0)
}


console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]), 30);
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]), 10);