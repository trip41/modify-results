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
  //currencyConvert  : require('./currencyConvert.js')
};

function KimFilter(data, query) {
  var self     = this;
  self.wrapper = data;
  self.query   = data.query;
  self.data    = data.results;

  self.currentCollection = '';
  self.tasks = [];

  // methods with preprecessing
  _.forEach(filters, function(val, key) {
    self[key] = decorator.call(self, val);
  });
};

KimFilter.prototype.output = function(fn) {
  var self = this;

  // execute all tasks sequentially and return the data
  return self.tasks.reduce(function(soFar, task) {
    return soFar.then(function() { return task; });
  }, Q(0))
  .then(function() {
    // remove query from data object
    delete self.wrapper.query;
    fn(self.wrapper);
  });
};

KimFilter.prototype.setCurrCollection = function(collection) {
  this.currentCollection = collection;
  return this;
};

function decorator(fn) {
  var self = this;
  return function(option) {
    // set current collection if not specified
    if(option.collection === undefined) {
      option['collection'] = self.currentCollection;
    }

    //if(false) {
    if(!self.query || !self.query.kimbypage) {
      self.tasks.push(Q(fn.call(self, option)));
    } else {
      self.data.forEach(function(entry, idx, arr) {
        var dataTmp = self.data;
        self.data = entry;
        self.tasks.push(Q(fn.call(self, option)));
        self.data = dataTmp;
      });
    }
    return self;
  };
};

module.exports = KimFilter;
