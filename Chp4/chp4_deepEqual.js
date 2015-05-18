function deepEqual(x,y){
	//Comparing non-objects
    if(typeof x == "object" && typeof y != "object"){
      return false;
    }
    else if(typeof x != "object" && typeof y == "object"){
      return false;
    }
    else if (x === null || y === null){
		return false;
    }
	else if(x === y) {
		return true;
	}
	//If we have objects we need to iterate through the object properties
	else if(typeof x == "object" && typeof y == "object"){
		var count = 0;
		var count2 = 0;
		//Check if they have the same number of properties
		for(var prop1 in x){
			count++;
		}
		for(var prop2 in y){
			count2++;
		}
		if(count != count2){
			return false;
		}
		else {
			for(var element in x){
				if(y.hasOwnProperty(element))
				{
					//This will return true before it has gone through all elements of the objects..as soon
					//as it sees an object, followed by a value with a match it will stop
			      return deepEqual(x[element], y[element]);
				}
				else{
					return false;
				}
			}
		}			
	}
}

var obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
// → true
//console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true