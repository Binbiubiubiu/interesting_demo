_.invert = function(obj) {
  var result = {};
  for (var i = 0, length = keys.length; i < length; i++) {
    result[obj[keys[i]]] = keys[i];
  }
  return result;
};

_.isNull = function(obj) {
  return obj === null;
};
_.isUndefined = function(obj) {
  return obj === void 0;
};
_.isArray =
  nativeIsArray ||
  function(obj) {
    return toString.call(obj) === '[object Array]';
  };
_.isObject = function(obj) {
  var type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
};
_.isElement = function(obj) {
  return !!(obj && obj.nodeType === 1);
};
_.isNaN = function(obj) {
  return _.isNumber(obj) && obj !== +obj;
};

// 返回随机整数;
_.random = function(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

// 判断类型;
function getType(o) {
  var _t;
  return ((_t = typeof o) == 'object'
    ? (o == null && 'null') || {}.toString.call(o).slice(8, -1)
    : _t
  ).toLowerCase();
}
