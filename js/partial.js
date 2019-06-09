var partial = function(func) {
  var pargs = [].slice.call(arguments, 1);
  return function() {
    var args = pargs.concat([].slice.call(arguments));
    return func.apply(func, args);
  };
};
var f = partial(function(a, b) {
  return a - b;
}, 50);
console.log(f(5));
