// Chapter 4
// Range function
//  Function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end){
  var newArray = [];
  var arrayLen = end - start;
	for(var i = start; i<= arrayLen; i++){
		//newArray[i] = start + i;
		newArray.push(i);
	}
  return newArray;
};

console.log(range(1,4));


// Sum function
// Takes an array of numbers and returns the sum of these numbers.
// Issues to overcome - had to initialise runningTotal to 0 as 
// before it was making runningTotal as NaN
function sum(arrayToAdd){
	var runningTotal = 0;
	for(var i = 0; i< arrayToAdd.length; i++){
		runningTotal += arrayToAdd[i];
	}
  return runningTotal;
}

var arrayToTest = [1, 2, 3, 4, 5];
sum(arrayToTest);

console.log(sum(range(1, 10)));

// Updated range function
//optional third argument that indicates the “step” value used to build up the array
function range(start, end, increment){
	var newArray = [];
	var arrayLen = end - start;

	if (arguments.length !== 3){
		var increment = 1;
	}
	
	for(var i=start; i<= arrayLen; i+=increment){
		newArray.push(i);
	}
  console.log(newArray);
}

console.log(range(1, 10, 2));

//////////////////////////////////////////////////////

// Updated range function to deal with negative de-increment
function range(start, end, step){
	var newArray = [];
	var arrayLen = end - start;

	if (arguments.length !== 3){
		var step = 1;
	}
	else if(step < 0) {
		
		//Have to change the loop for negative numbers to deal with the case when it goes over zero
		for(var i=start; i<= arrayLen; i-=step){
		newArray.push(i);
	}
	else {
		for(var i=start; i<= arrayLen; i+=increment){
		newArray.push(i);
	}
}
	
	}
	
	
  console.log(newArray);
}

console.log(range(1, 10, 2));