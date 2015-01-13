var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(option) {
  var results       = this.results;
  var collection = option.collection;
  var newname    = option.newname;

  // invalid collection
  if(results[collection] === undefined)  return;

  results[newname] = _.cloneDeep(results[collection]);
  delete results[collection];

  // TODO: fix it
  // update current collection if renamed 
  if(this.currentCollection === collection)
    this.setCurrCollection(newname);

  this.results = results;
};
