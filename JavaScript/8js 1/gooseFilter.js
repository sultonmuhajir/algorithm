/*
|--------------------------------------------------------------------------
| Filter out the geese
|--------------------------------------------------------------------------
|
*/

function gooseFilter(birds) {
	return birds.filter(i => i != "African" && i != "Roman Tufted" && i != "Toulouse" && i != "Pilgrim" && i != "Steinbacher")
}


function gooseFilter(birds) {
	let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	return birds.filter(b => !geese.includes(b));
}


function gooseFilter(birds) {
	let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	return birds.filter(bird => geese.indexOf(bird) < 0);
}


function gooseFilter(birds) {
	let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	return gooseFilter.pop(geese);
}


console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]), ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);