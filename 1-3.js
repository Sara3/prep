//write an algorithm that remove duplicates 


// loop thru the string and add each value to an object and the value = true 
// for each new string check if it is in the object or not 


function duplicate(str) {
	var obj = {}
	var result = ''

	for(let i = 0; i < str.length; i++) {
		//if it is in the object 
		if(!obj[str[i]]) {
			obj[str[i]] = true;
			result = result+str[i]
		}
		//else add it to the object 
		//and add it to resulting string

	}

	return result
}

//with

function duplicate1(str) {
	for(let i = 0; i < str.length-1; i++) {
		for(let j =i+1 ; j < str.length;j++) {
	    if(str[i]===str[j]) {
	      str = str.substr(0, j) + str.substr(j+1, str.length)
		  }
		}
	}
  return str;
}
//t, d
console.log(duplicate1("stdfdtttt"));



//with out buffer 