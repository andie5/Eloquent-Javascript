//Version 1
/*function countBs(bString){
  var returnedBs = 0;
  for(var i =0; i<bString.length; i++){
    if(bString.charAt(i) == "B"){
      returnedBs += 1;
    }
  }
  return returnedBs;
};*/

function countChar(bString, characterSearch) {
var charNum = 0;
  for(var i =0; i<bString.length; i++){
    if(bString.charAt(i) == characterSearch){
      charNum += 1;
    }
  }
  return charNum;
};

//Version 2 of countBs
function countBs(bString){
  return countChar(bString, "B");
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4