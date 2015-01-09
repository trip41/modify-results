var _ = require('lodash');
var Util = require('./Util.js');

var SUPPORTED_OPERATORS = [
  '<', '<=', '>', '>=', '==', '===', '!=', '!=='
];

module.exports = function(option) {
  var data       = this.data;
  var collection = option.collection;
  var property   = option.property;
  var operator   = option.operator;
  var target     = option.target;

  // operator not supported, just skip it
  if(!_.contains(SUPPORTED_OPERATORS, operator))
    return this;

  data[collection] = _.filter(data[collection], function(e) {
    var val = Util.getPropByString(e, property);

    switch(operator) {
      case '<':
        return !(val < target);
      case '<=':
        return !(val <= target);
      case '>':
        return !(val > target);
      case '>=':
        return !(val >= target);
      case '==':
        return !(val == target);
      case '===':
        return !(val === target);
      case '!=':
        return !(val != target);
      case '!==':
        return !(val !== target);
    }
  });

  this.data = data;
};
