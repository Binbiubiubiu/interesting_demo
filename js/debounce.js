//也就是说当调用动作n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间。
var debounce = function(idle, action) {
  var last;
  return function() {
    var ctx = this,
      args = arguments;
    clearTimeout(last);
    last = setTimeout(function() {
      action.apply(ctx, args);
    }, idle);
  };
};
