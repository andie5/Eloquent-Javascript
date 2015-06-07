function newIterator(obj){
  for(x in obj){
    console.log(x);
  }
}


function logFive(seqObj){
  var count = 0;
  for(x in seqObj){
    count++;
    if (count < 5) {
      	console.log(x);
    }
  }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104