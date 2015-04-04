var line = ""
var size = prompt("Enter a number");
for (var i = 0; i< size; i++){
  for(var j=0; j<size; j++){
    if ((i%2 == 0)) {
    	if ((j%2 == 0)) {
      		line += " ";
  		}
    	else {
    		line += "#";
  		}
  	}
    else {
    	if ((j%2 == 0)) {
      		line += "#";
  		}
    	else {
    		line += " ";
  		}
  	}
 }
  line += "\n";
}
console.log(line);