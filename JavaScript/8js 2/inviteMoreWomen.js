/*
|--------------------------------------------------------------------------
| Simple Fun #152: Invite More Women?
|--------------------------------------------------------------------------
|
*/

function inviteMoreWomen(L) {
   return L.filter(i => i == -1).length < L.filter(i => i == 1).length;
}


function inviteMoreWomen(L) {
   return L.reduce((a, b) => a + b) > 0;
}


function inviteMoreWomen(L) {
   return L.length >> 1 in L.filter(g => g == 1)
}


console.log(inviteMoreWomen([1, -1, 1]), true)
console.log(inviteMoreWomen([1, 1, 1]), true)
console.log(inviteMoreWomen([-1, -1, -1]), false)
console.log(inviteMoreWomen([1, -1]), false)