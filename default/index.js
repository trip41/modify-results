var fs      = require('fs');
var path    = require('path');
var _       = require('lodash');

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
  kimRenameCollection : require('./kimRenameCollection.js')
};

function kimFilter(data) {
  var self     = this;
  self.wrapper = data;
  self.data    = data.results;

  self.currentCollection = '';

  // attach filters
  _.forEach(filters, function(val, key) {
    self[key] = preprocess.call(self, val);
  });
};

kimFilter.prototype.output = function() {
  this.wrapper.results = this.data;
  return this.wrapper;
};

kimFilter.prototype.setCurrCollection = function(collection) {
  this.currentCollection = collection;
  return this;
};

function preprocess(fn) {
  var self = this;
  return function(config) {
    if(config !== undefined && config instanceof Object && config['collection'] === undefined) {
      config['collection'] = self.currentCollection;
    }
    return fn.call(self, config);
  };
};

module.exports = kimFilter;
