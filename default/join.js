var _ = require('lodash');

module.exports = function(option) {
  var results       = this.results;
  var collection = option.collection;
  var attrName   = option.attrName;

  this.results = results;
};
