//Write a function, deepEqual, that takes two values and returns true only if they are the same value or are 
//objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
function deepEqual(x,y){
	//Comparing non-objects
	if(x === y) {
		return true;
	}
	else if (x == null || y == null){
		return false;
	}
	//If we have objects we need to iterate through the object properties
	else if(typeof x == "object" && typeof y == "object"){
		var count = 0;
		var count2 = 0;
		//Check if they have the same number of properties
		for(prop1 in x){
			count++;
		}
		for(prop2 in y){
			count2++;
		}
		if(count != count2){
			return false;
		}
		else {
			for(var element in x){
				if(y.hasOwnProperty(element))
				{
					deepEqual(x[element], y[element]);
				}
				else{
					return false;
				}
			}
		}			
	}
}