/*
|--------------------------------------------------------------------------
| L1: Set Alarm
|--------------------------------------------------------------------------
|
*/

function setAlarm(employed, vacation) {
   return employed == true && vacation == false;
}


const setAlarm = (employed, vacation) => !!(employed & ~vacation)


function setAlarm(employed, vacation) {
   return employed && !vacation;
}


function setAlarm(employed, vacation) {
   return employed > vacation
}


console.log(setAlarm(true, true), false);
console.log(setAlarm(false, true), false);
console.log(setAlarm(true, false), true);