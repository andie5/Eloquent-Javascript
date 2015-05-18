// Chapter 5
/**function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
  return a + b;
}, 0));*/

var arrays = [[1, 2, 3], [4, 5], [6]];
var arraynew = [];
function reduce(array, combine) {
  var current = 1;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  	arrayNew.concat(array[i]);
  console.log(current);
  return current;
}

console.log(reduce(arrays, function(a, b) {
  return a  + b;
}, 0));
// → [1, 2, 3, 4, 5, 6]