var memoize = function() {
  var id = 0;
  return function() {
    return id++;
  };
};
var f = memoize();
console.log(f());
