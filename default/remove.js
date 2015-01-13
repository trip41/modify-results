var _ = require('lodash');
var Util = require('./Util.js');

var SUPPORTED_OPERATORS = [
  '<', '<=', '>', '>=', '==', '===', '!=', '!=='
];

module.exports = function(option) {
  var results       = this.results;
  var collection = option.collection;
  var property   = option.property;
  var operator   = option.operator;
  var target     = option.target;

  // operator not supported, just skip it
  if(!_.contains(SUPPORTED_OPERATORS, operator))
    return this;

  results[collection] = _.filter(results[collection], function(e) {
    var val = Util.getPropByString(e, property);

    switch(operator) {
      case '<':
        return val < target;
      case '<=':
        return val <= target;
      case '>':
        return val > target;
      case '>=':
        return val >= target;
      case '==':
        return val == target;
      case '===':
        return val === target;
      case '!=':
        return val != target;
      case '!==':
        return val !== target;
    }
  });

  this.results = results;
};
