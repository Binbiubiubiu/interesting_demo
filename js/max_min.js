function max(arr) {
  var res = -Math.pow(2, 52),
    len = arr.length;
  for (var i = 0; i < len; i++) {
    if (res < arr[i]) {
      res = arr[i];
    }
  }
  return res;
}

function min(arr) {
  return Math.min.apply({}, arr);
}
