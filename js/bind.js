//case 1
if (!function() {}.bind) {
  Function.prototype.bind = function(context) {
    var self = this,
      args = Array.prototype.slice.call(arguments);

    return function() {
      return self.apply(context, args.slice(1));
    };
  };
}

//case 2
var bind =
  Function.prototype.bind ||
  function(context) {
    var self = this;
    return function() {
      return self.apply(context, [].slice.call(arguments, 1));
    };
  };
var bar = function() {
  console.log(this.x);
};
var foo = {
  x: 3
};
bar.bind(foo)();
