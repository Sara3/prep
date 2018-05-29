// write a method to replace spaces with stings with "%20"


function replaceSpace(str) {
	for (var i = 0; i < str.length; i++) {
		if(str[i]===' ') {
			str = str.substring(0, i) +"%20"+str.substring(i+1, str.length)
		}
	}
	return str;
}


//alternative
function replacespace (str) {
	for (var i = 0; i < str.length; i++) {
		if(str[i]==" ") {
			str = str.replace(" ", "%20");
		}
	}
	return str
} 


console.log(replacespace("I am 22 years old"))