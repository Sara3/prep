// implement an algorithm to determine ifa string has all unique characters 


function unique(str) {
	//1) 2 for loops = O(n) ^2: with out data structions 
	// for (var i = 0; i < str.length-1; i++) {
	// 	for (var j = i+1; j < str.length; j++) {
	// 	 	if(str[i]=== str[j]){
	// 	 		console.log(str[i], str[j])
	// 	 		return false; 
	// 	 	}
	// 	}
	// }
	// return true; 

	//2) loop and as you go if you dont find a match you add it in the table (the look up time is O(1))
	var storage = {}
	//loop 
	for (let i = 0; i < str.length; i++) {
	//if found that value return false 
		if (storage[str[i]]) {
			return false
	//else add it to the object 
		} else {
			storage[str[i]] = true;
		}
	}
	return true;
}


console.log(unique("1234df"))