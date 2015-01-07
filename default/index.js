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

  self.kimSort             = kimSort;
  self.kimReplace          = kimReplace;
  self.kimCustom           = kimCustom;
  self.kimSplit            = kimSplit;
  self.kimFilter           = kimFilter;
  self.kimMerge            = kimMerge;
  self.kimRemove           = kimRemove;
  self.kimRemoveProp       = kimRemoveProp;
  self.kimToInt            = kimToInt;
  self.kimToFloat          = kimToFloat;
  self.kimRenameCollection = kimRenameCollection;
  self.kimRenameProperty   = kimRenameProperty;

};

kimFilter.prototype.output = function() {
  this.wrapper.results = this.data;
  return this.wrapper;
};

module.exports = kimFilter;
