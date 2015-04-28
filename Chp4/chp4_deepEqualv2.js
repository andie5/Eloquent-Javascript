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
			if( !(x.hasOwnProperty(prop2)) || !deepEqual(x[prop2], y[prop2]) ){
				return false;
            }
		}
      return count == count2;
	}			
}

var obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
// → true
//console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

var obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
// → true
//console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true