/*
|--------------------------------------------------------------------------
| Grasshopper - Create the rooms
|--------------------------------------------------------------------------
|
*/

class Room {
   constructor() {
      this.name = "";
      this.description = "";
      this.completed = "";
   }
}
let rooms = {
   room1: new Room(),
   room2: new Room(),
   room3: new Room(),
};


let rooms = {
   room1: [1, 2, 3],
   room2: [4, 5, 6],
   room3: [7, 8, 9],
};


let rooms = {};
for (let i = 0; i < 3; i++) {
   rooms[`room${i}`] = { a: 1, b: 2, c: 3 };
}