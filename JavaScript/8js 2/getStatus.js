/*
|--------------------------------------------------------------------------
| Unexpected parsing
|--------------------------------------------------------------------------
|
*/

function getStatus(isBusy) {
   let msg = isBusy ? "busy" : "available";
   return {
      status: msg,
   };
}


function getStatus(isBusy) {
   return { status: isBusy ? "busy" : "available" };
}


function getStatus(isBusy) {
   return { status: { true: "busy", false: "available" }[isBusy] };
}


console.log(getStatus(true).status, "busy");