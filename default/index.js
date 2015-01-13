var fs      = require('fs');
var path    = require('path');
var _       = require('lodash');
var Q       = require('q');

var filters = {
  sort             : require('./sort.js'),
  split            : require('./split.js'),
  merge            : require('./merge.js'),
  toInt            : require('./toInt'),
  remove           : require('./remove.js'),
  custom           : require('./custom.js'),
  toFloat          : require('./toFloat.js'),
  replace          : require('./replace.js'),
  toString         : require('./toString.js'),
  removeProp       : require('./removeProp.js'),
  renameProperty   : require('./renameProperty.js'),
  renameCollection : require('./renameCollection.js'),
  currencyConvert  : require('./currencyConvert.js')

  //not ready
  //TimeDateConvert  : require('./TimeDateConvert.js')
};

function KimFilter(data) {
  var self     = this;
  self.data    = data;
  self.query   = data.query;
  self.results = data.results;

  self.currentCollection = '';
  self.tasks = [];

  // decorate methods
  _.forEach(filters, function(val, key) {
    self[key] = decorator.call(self, val);
  });
};

KimFilter.prototype.output = function(fn) {
  var self = this;

  // execute tasks sequentially and pass result to the callback
  return self.tasks.reduce(function(soFar, task) {
    return soFar.then(function() { return task; });
  }, Q(0))
  .then(function() {
    // remove query from results object
    delete self.data.query;
    return fn(self.data);
  });
};

KimFilter.prototype.setCurrCollection = function(collection) {
  this.currentCollection = collection;
  return this;
};

function decorator(fn) {
  var self = this;
  return function(option) {
    // set current collection if not specified in option
    option.collection = option.collection || self.currentCollection;

    //if(self.query && self.query.kimbypage) {
    if(true) {
      self.results.forEach(function(entry, idx, arr) {
        var resultsTmp = self.results;
        self.results = entry;
        self.tasks.push(Q(fn.call(self, option)));
        self.results = resultsTmp;
      });
    } else {
      self.tasks.push(Q(fn.call(self, option)));
    }
    return self;
  };
};

module.exports = KimFilter;
