//case 1
var flatten = function (input, shallow) {
  var output = [],
    idx = 0;
  for (var i = 0, length = input.length; i < length; i++) {
    var value = input[i];
    if (typeof value === 'object') {
      if (!shallow) value = flatten(value, shallow);
      var j = 0,
        len = value.length;
      output.length += len;
      while (j < len) {
        output[idx++] = value[j++];
      }
    } else {
      output[idx++] = value;
    }
  }
  return output;
};

//case 2
while (arr.some(item => item instanceof Array)) arr = [].concat(...arr);
