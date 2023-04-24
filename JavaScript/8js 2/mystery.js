/*
|--------------------------------------------------------------------------
| Return to Sanity
|--------------------------------------------------------------------------
|
*/

function mystery() {
   let res = { sanity: "Hello" };
   return res;
}


const mystery = () => ({ sanity: "Hello" });


function mystery() {
   return { sanity: "Hello" };
}


console.log(mystery(), { sanity: "Hello" }, "Mystery has not returned to sanity");