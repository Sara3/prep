//write code to reverse C-style string 
// check if a string is permutation of the other - if a string is scrumbleed 


// O(n)

//add the first string inthe object 
// got the str2 and for each one look to see if it in the object 


function permutation(str1, str2) {
	var str1_obj = {}
	if(str1.length != str2.length) {
		return false
	}
	for(let i = 0; i < str1.length; i++) {
		str1_obj[str1[i]] = false; 
	}

	for (var j = 0; j < str2.length; j++) {
		if(str1_obj[str2[j]] == false) {
			str1_obj[str2[j]] = true;
		}
	}
// go over the objects and check if all values ae true 

	for (let value in str1_obj) {
		if (!str1_obj[value]) {
			return false
		}
	}
	return true
}

//20 minutes 

console.log(permutation("string1", "string1"))

