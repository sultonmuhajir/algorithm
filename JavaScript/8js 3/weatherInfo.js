/*
|--------------------------------------------------------------------------
| Grasshopper - Debug
|--------------------------------------------------------------------------
|
*/

const convertToCelsius = f => (f - 32) * (5 / 9)
function weatherInfo(temp) {
   const c = convertToCelsius(temp)
   return c > 0 ? `${c} is above freezing temperature` : `${c} is freezing temperature`
}


function weatherInfo(temp) {
   return `${temp = (temp - 32) * (5 / 9)} is ${temp > 0 ? 'above ': ''}freezing temperature`;
}


function weatherInfo(temp) {
   const c = (temp - 32) * (5 / 9)
   return (c < 0) ? (c + " is freezing temperature") : (c + " is above freezing temperature")
}


console.log(weatherInfo(50), '10 is above freezing temperature')
console.log(weatherInfo(23), '-5 is freezing temperature')