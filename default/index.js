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
  self.wrapper = data;
  self.data    = data.results;

  self.currentCollection = '';
  self.tasks = [];

  // methods with preprecessing
  _.forEach(filters, function(val, key) {
    self[key] = preprocess.call(self, val);
  });
};

KimFilter.prototype.output = function(fn) {
  var self = this;

  // execute all tasks sequentially and return the data
  return self.tasks.reduce(function(soFar, task) {
    return soFar.then(function() { return task; });
  }, Q(0))
  .then(function() {
    fn(self.wrapper);
  });
};

KimFilter.prototype.setCurrCollection = function(collection) {
  this.currentCollection = collection;
  return this;
};

function preprocess(fn) {
  var self = this;
  return function(config) {
    // set current collection if not specified
    if(config !== undefined && config instanceof Object && config['collection'] === undefined) {
      config['collection'] = self.currentCollection;
    }

    if(query && !query.kimByPage) {
      self.tasks.push(Q(fn.call(self, config)));
    } else {
      self.data.forEach(function(entry, idx, arr) {
        self.tasks.push(Q(fn.call({ data: entry, mySelf: self }, config)));
      });
    }
    return self;
  };
};

module.exports = KimFilter;
