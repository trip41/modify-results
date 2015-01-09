var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(option) {
  var data       = this.data;
  var collection = option.collection;
  var newname    = option.newname;

  // invalid collection
  if(data[collection] === undefined)  return;

  data[newname] = data[collection];
  delete data[collection];

  // update current collection if renamed 
  if(this.currentCollection === collection)
    this.currentCollection = newname;

  this.data = data;
};
