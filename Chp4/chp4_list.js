//Linked list
// The rest: list part of the array is what makes it recursive
function arrayToList(arrayToReverse){
  var list = null;
  //var current = {};
  var len = arrayToReverse.length;
  for(var i = arrayToReverse.length-1; i >= 0; i--){
     list = {value: arrayToReverse[i], rest: list};
    	//list += current;
	}
  	return list;
}
--------------------------------------------------------------------
function listToArray(listToReverse){
  var newArray = [];
  // Every iteration of the loop, node points to the current sublist, 
  // and the body can read its value property to get the current element.
  // At the end of an iteration, node moves to the next sublist. 
  // When that is null, we have reached the end of the list and the loop 
  //is finished.and the body can read its value property to get the current 
  // element.
  for (var node = listToReverse; node!= null; node = node.rest) {
	  newArray.push(node.value);    
   }
  	return newArray;
}

console.loglistToArray({value: 10, rest: {value: 20, rest: null}});

--------------------------------------------------------------
function prepend(item, list){
  list = {value: item, rest: list};
  return list;
}

------------------------------------------
// Takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.
function nth(listToCheck, position) {
	var noInList = 0;
	var current = 0;
	//Find the length of the list
	for (var element in listToCheck){
		noInList++;
	}
	//If the position number provided is not valid
	if (position > noInList || position < 0){
		return undefined;
	}
	
	for (var node = listToCheck; node!= null; node = node.rest) {
		if(current == position){
			return node.value;
		}
		else{
			current++;
		}
   }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}




//{value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}
