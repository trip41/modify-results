var _       = require('lodash');
var Q       = require('q');
var filters = require('./default');

function KimFilter(data) {
  var self     = this;
  self.data    = data;
  self.query   = data.query;
  self.results = data.results;

  self.currentCollection = '';
  self.tasks = [];

  // decorate methods
  _.forEach(filters, function(fn, fn_name) {
    self[fn_name] = decorator.call(self, fn);
  });
};


KimFilter.prototype.executeSingleTask = function(task) {
  var self = this;
  if(self.query && self.query.kimbypage) {
    // handle each page separately, no need to execute sequentially
    return Q.all(self.results.map(function(pageResults, idx, arr) {
      return Q(task.fn(pageResults, task.option));
    }));
  } else {
    return Q(task.fn(self.results, task.option));
  }
};


KimFilter.prototype.executeAllTasks = function() {
  var self = this;
  return self.tasks.reduce(function(soFar, task) {
    return soFar.then(function() { return self.executeSingleTask(task); });
  }, Q(null));
};


KimFilter.prototype.output = function(fn) {
  var self = this;
  delete self.data.query;
  self.executeAllTasks().then(function() {
    fn(null, self.data);
  }, function(err){ 
    fn(err, self.data);
  });
};


KimFilter.prototype.setCurrCollection = function(collection) {
  this.currentCollection = collection;
  return this;
};


function decorator(fn) {
  var self = this;
  return function(option) {
    // set current collection if not specified in 'option'
    option.collection = option.collection || self.currentCollection;
    
    // enqueue current task
    self.tasks.push({ fn: fn, option: option });
    return self;
  };
};

module.exports = KimFilter;
