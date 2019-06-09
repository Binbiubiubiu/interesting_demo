//case 1
var arr = [1, 3, 1, 2, 3, 4, 55, 23, 4, 23, 2];
function uniquueArr(arr) {
  var obj = {},
    arr1 = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
console.log(uniquueArr(arr));

//case 2
let unique = function(array) {
  return [...new Set(array)];
};

//case 3
let unique = function(array) {
  let ro = {};
  let ra = [];
  array.forEach(item => {
    if (!ro[item]) {
      ro[item] = item;
      ra.push(item);
    }
  });
  return ra;
};

//case 4
var uniq = function(arr) {
  var output = [];
  for (i = 0, len = arr.length; i < len; i++) {
    if (output.indexOf(arr[i]) === -1) {
      output.push(arr[i]);
    }
  }
  return output;
};
