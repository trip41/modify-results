var _ = require('lodash');

module.exports = function(option) {
  var data       = this.data;
  var collection = option.collection;
  var attrName   = option.attrName;

  this.data = data;
};
