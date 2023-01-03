/*
|--------------------------------------------------------------------------
| Simple Fun #1: Seats in Theater
|--------------------------------------------------------------------------
|
*/

function seatsInTheater(nCols, nRows, col, row) {
   return (nCols - col + 1) * (nRows - row)
}


function seatsInTheater(nCols, nRows, col, row) {
   const length = nCols - col + 1
   const height = nRows - row
   return length * height
}


function seatsInTheater(nCols, nRows, col, row) {
   return (nCols - --col) * (nRows - row)
}


function seatsInTheater(nCols, nRows, col, row) {
   return (~nCols + col) * (row - nRows)
}


console.log(seatsInTheater(16, 11, 5, 3), 96)
console.log(seatsInTheater(1, 1, 1, 1), 0)
console.log(seatsInTheater(13, 6, 8, 3), 18)
console.log(seatsInTheater(60, 100, 60, 1), 99)
console.log(seatsInTheater(1000, 1000, 1000, 1000), 0)