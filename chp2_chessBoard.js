// Chapter 2 
// Chess board
var grid = "";;
var line = ""
var input = prompt("Enter a number");
for (var i = 0; i< input; i++){
  for(var j=0; j<input; j++){
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
  grid += line;
  line = "";
}
console.log(grid);