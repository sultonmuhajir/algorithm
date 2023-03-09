/*
|--------------------------------------------------------------------------
| 8kyu interpreters: HQ9+
|--------------------------------------------------------------------------
|
*/

function HQ9(code) {
   if (code === 'H') return 'Hello World!'
   if (code === 'Q') return code
   let res = ''
   if (code === '9') {
      for (let i = 99; i > 2; i--) {
         res += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i-1} bottles of beer on the wall.\n`
      }
      res += `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`
      res += `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`
      res += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
      return res
   }
   return undefined
}


function HQ9(code) {
   return (fn => ({
         H: `Hello World!`,
         Q: `Q`,
         9: fn(99)
      })[code])
      (function fn(val) {
         return val === 2 ?
            `2 bottles of beer on the wall, 2 bottles of beer.
   Take one down and pass it around, 1 bottle of beer on the wall.
   1 bottle of beer on the wall, 1 bottle of beer.
   Take one down and pass it around, no more bottles of beer on the wall.
   No more bottles of beer on the wall, no more bottles of beer.
   Go to the store and buy some more, 99 bottles of beer on the wall.` :
            `${val} bottles of beer on the wall, ${val} bottles of beer.
   Take one down and pass it around, ${--val} bottles of beer on the wall.
   ${fn(val)}`;
      });
}


console.log(HQ9('H'));
console.log(HQ9('Q'));
console.log(HQ9('9'));
console.log(HQ9('X'));