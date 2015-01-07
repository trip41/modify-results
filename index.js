var fs      = require('fs');
var path    = require('path');

var kimSort             = require('./kimSort.js');
var kimReplace          = require('./kimReplace.js');
var kimCustom           = require('./kimCustom.js');
var kimSplit            = require('./kimSplit.js');
var kimRemove           = require('./kimRemove.js');
var kimRemoveProp       = require('./kimRemoveProp.js');
var kimMerge            = require('./kimMerge.js');
var kimToInt            = require('./kimToInt');
var kimToFloat          = require('./kimToFloat.js');
var kimRenameCollection = require('./kimRenameCollection.js');
var kimRenameProperty   = require('./kimRenameProperty.js');


function kimFilter(data) {
  var self = this;
  self.wrapper = data;
  self.data = data.results;

  this.kimSort             = kimSort;
  this.kimReplace          = kimReplace;
  this.kimCustom           = kimCustom;
  this.kimSplit            = kimSplit;
  this.kimFilter           = kimFilter;
  this.kimMerge            = kimMerge;
  this.kimRemove           = kimRemove;
  this.kimRemoveProp       = kimRemoveProp;
  this.kimToInt            = kimToInt;
  this.kimToFloat          = kimToFloat;
  this.kimRenameCollection = kimRenameCollection;
  this.kimRenameProperty   = kimRenameProperty;

  this.output = function() {
    self.wrapper.results = self.data;
    return self.wrapper;
  };
};

module.exports = kimFilter;
