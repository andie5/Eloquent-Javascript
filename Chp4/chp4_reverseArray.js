//Reverse an array

function reverseArray(arrayToReverse){
	var newArray = [];
  var len = arrayToReverse.length;
  for(var i = 0; i< len; i++){
      newArray.unshift(arrayToReverse[i]);  
	}
  	return newArray;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];


//The second, reverseArrayInPlace, does what the reverse method does: 
//it modifies the array given as argument in order to reverse its elements. 
//Neither may use the standard reverse method.
function reverseArrayInPlace(arrayToReverse){
  var arrayLength = arrayToReverse.length; 
  var firstValue = 0;
  var secondIndex = 0;
  var secondValue = 0;
  var counter = Math.floor(arrayLength / 2);
  for(var i = 0; i< counter ; i++){
    
    //Store the values needed in temp value
	firstValue = arrayToReverse[i];
    secondIndex = arrayLength - 1 - i;
    secondValue = arrayToReverse[secondIndex];
    
    //Swap the values saved around
    arrayToReverse[i] = secondValue;
    arrayToReverse[secondIndex] = firstValue;
	}
  	return arrayToReverse;
}

var arrayValue = [1, 2, 3, 4, 5,9, 0];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

//Array to LIST

function arrayToList(arrayToReverse){
	var newArray = [];
  	var list = {};
  var current = {};
  var len = arrayToReverse.length;
  for(var i = 0; i< len; i++){
    var current = {value: i, rest: list};
    list += current;
      //newArray.unshift(arrayToReverse[i]);  
	}
  	return list;
}

console.log(arrayToList([10, 20]));