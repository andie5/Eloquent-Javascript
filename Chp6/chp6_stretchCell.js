function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
};
StretchCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};
StretchCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1)
    .concat([repeat(" ", width)]);
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]