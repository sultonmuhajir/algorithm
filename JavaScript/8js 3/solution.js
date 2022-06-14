/*
|--------------------------------------------------------------------------
| Classic Hello World
|--------------------------------------------------------------------------
|
*/

class Solution {
   static main() {
      console.log('Hello World!')
   }
}


Solution = {};
Solution.main = () => {
   console.log('Hello World!');
};


Solution = {
   main: function () {
      logRecord = ["Hello World!"]
   }
}