var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(option) {
  var data       = this.data;
  var collection = option.collection;
  var newname    = option.newname;

  var oldval = data[collection];
  delete data[collection];
  data[newname] = oldval;

  // update current collection if renamed 
  if(this.currentCollection === collection)
    this.currentCollection = newname;

  this.data = data;
};
