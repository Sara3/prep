//write an algorithm such that if an element in an MXn matrix is 0 it entire row and column is set to 0


function changeEntireRowAndColomn(i, j) {
	for (var i = 0; i < matrix.length; i++) {
		matrix[i][j] = 0;
	}

	
}

// find the 0
function findTheZero(arr) {
	//console.log(arr)
	for (var i = 0; i < arr.length; i++){
		for (var j = 0;  j < arr[i].length; j++) {
			if(arr[i][j] === 0) {
				changeEntireRowAndColomn(i, j)
			}
		}
		
	}

}


var matrix = [];
matrix.push([1,2,3])
matrix.push([1,0,3])
matrix.push([1,2,3])
matrix.push([1,2,3])
matrix.push([1,2,3])

findTheZero(matrix)

console.log(matrix)