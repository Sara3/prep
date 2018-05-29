
//write a method to decide if two strings are anagrams

//1) sort the string and see if they are equal - sort O(n)
 


function anagrams(str1, str2) {
	if (str1.length != str2.length) {
		return false;
	}
	return str1.split('').sort().join() === str2.split('').sort().join();
}



//if the size is different then the would not be anagrams 


 //2) add the strings to object w
 // loop through the next string and see if they are present in the object and turn the value true 
 //check if any values of the obj is still false 

function anagram(str1, str2) {
	var table= {}
	for (let i = 0; i < str1.length; i++) {
		if(!table[str1[i]]) {
			table[str1[i]] = 1;
		} else {
			table[str1[i]]++;
		}
	}
	for (let i = 0; i < str2.length; i++) {
		if(table[str2[i]]) {
			table[str2[i]]--;
		} else {
			return false; 
		}
	}

	for (let value in table) {
		if (table[value] != 0) {
			return false;
		}
	}

	return true;
}
console.log(anagram("sftf", "sdf"))

//35 

