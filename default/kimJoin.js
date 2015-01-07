var _ = require('lodash');

module.exports = function(config) {
  var data = this.data;
  var collection = config.collection;
  var attrName = config.attrName;

  

  this.data = data;
  return this;
};
