var fs      = require('fs');
var path    = require('path');
var _       = require('lodash');
var Q       = require('q');

var filters = {
  kimSort             : require('./kimSort.js'),
  kimSplit            : require('./kimSplit.js'),
  kimMerge            : require('./kimMerge.js'),
  kimToInt            : require('./kimToInt'),
  kimRemove           : require('./kimRemove.js'),
  kimCustom           : require('./kimCustom.js'),
  kimToFloat          : require('./kimToFloat.js'),
  kimReplace          : require('./kimReplace.js'),
  kimToString         : require('./kimToString.js'),
  kimRemoveProp       : require('./kimRemoveProp.js'),
  kimRenameProperty   : require('./kimRenameProperty.js'),
  kimRenameCollection : require('./kimRenameCollection.js'),
  kimCurrencyConvert  : require('./kimCurrencyConvert.js')

  //not ready
  //kimTimeDateConvert  : require('./kimTimeDateConvert.js')
};

function kimFilter(data) {
  var self     = this;
  self.wrapper = data;
  self.data    = data.results;

  self.currentCollection = '';
  self.tasks = [];

  // methods with preprecessing
  _.forEach(filters, function(val, key) {
    self['_' + key] = preprocess.call(self, val);
  });

  // wrap kimMethods
  _.forEach(filters, function(val, key) {
    self[key] = function(arguments) {
      self.tasks.push(Q(self['_' + key](arguments)));
      return self;
    };
  });

};


kimFilter.prototype.output = function() {
  var self = this;

  // execute all tasks sequentially and return the data
  return self.tasks.reduce(function(soFar, task) {
    return soFar.then(function() { return task; });
  }).then(function() {
    return self.wrapper;
  });
};


kimFilter.prototype.setCurrCollection = function(collection) {
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
    
    return fn.call(self, config);
  };
};

module.exports = kimFilter;
