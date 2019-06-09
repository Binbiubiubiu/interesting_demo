function _lazy_man(name) {
  this.tasks = [];
  var self = this;
  var fn = (function(n) {
    var name = n;
    return function() {
      console.log(`Hi! This is ${name}`);
      self.next();
    };
  })(name);
  this.tasks.push(fn);
  setTimeout(function() {
    self.next();
  }, 0);
}

_lazy_man.prototype.next = function() {
  var fn = this.tasks.shift();
  fn && fn();
};

_lazy_man.prototype.sleep = function(num) {
  var self = this;
  var fn = (function(n) {
    var num = n;
    return function() {
      setTimeout(function() {
        console.log(`Wake up after ${num}`);
        self.next();
      }, num * 1000);
    };
  })(num);
  this.tasks.push(fn);
  return this;
};

_lazy_man.prototype.eat = function(name) {
  var self = this;
  var fn = (function(n) {
    var name = n;
    return function() {
      console.log(`Eat ${name}`);
      self.next();
    };
  })(name);
  this.tasks.push(fn);
  return this;
};

_lazy_man.prototype.sleepfirst = function(num) {
  var self = this;
  var fn = (function(n) {
    var num = n;
    return function() {
      setTimeout(function() {
        console.log(`Wake up after ${num}`);
        self.next();
      }, num * 1000);
    };
  })(num);
  this.tasks.unshift(fn);
  return this;
};

function LazyMan(name) {
  return new _lazy_man(name);
}

LazyMan('Hank')
  .sleep(10)
  .eat('dinner')
  .sleepfirst(10);
