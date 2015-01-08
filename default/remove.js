var _ = require('lodash');
var Util = require('./Util.js');

var SUPPORTED_OPERATORS = [
  '<', '<=', '>', '>=', '==', '===', '!=', '!=='
];

module.exports = function(config) {
  var data       = this.data;
  var collection = config.collection;
  var property   = config.property;
  var operator   = config.operator;
  var target     = config.target;

  // operator not supported, just skip it
  if(!_.contains(SUPPORTED_OPERATORS, operator))
    return this;

  data[collection] = _.filter(data[collection], function(e) {
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

  this.data = data;
};
