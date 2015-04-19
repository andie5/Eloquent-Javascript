// Chapter 4
// Range function
//  Function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end){
  var newArray = [];
	for(var i = start; i<= end; i++){
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
	if (arguments.length !== 3){
		var increment = 1;
	}
	
	for(var i=start; i<= end; i+=increment){
		newArray.push(i);
	}
  return newArray;
}

console.log(range(1, 10, 2));

//////////////////////////////////////////////////////

// Updated range function to deal with negative de-increment
function range(start, end, step){
	var newArray = [];
	var step;
  //Default the value for step if not already given
	if (arguments.length !== 3 && (end > start)){
		step = 1;
	}
	else if (arguments.length !== 3){
		step = -1;
	}

  //Using negative or positive step values
    if(step < 0) {
		for(var i=start; i>= end; i+=step){
				newArray.push(i);
		}
	}
	else {
		for(var i=start; i<= end; i+=step){
				newArray.push(i);
		}
	}
	 return newArray;
}

//console.log(range(1, 10));
// → 55
//console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
//console.log(range(1, 10, 2));
//[1, 3, 5, 7, 9]
	
	
	
	
  console.log(newArray);
}

console.log(range(1, 10, 2));