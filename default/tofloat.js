var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(results, option) {
  var collection = option.collection;
  var property   = option.property;
  var decimal    = option.decimal;

  results[collection] = _.map(results[collection], function(e) {
    var val = decimal === undefined
      ? parseFloat(Util.getPropByString(e, property))
      : parseFloat(parseFloat(Util.getPropByString(e, property)).toFixed(decimal));

    Util.setPropByString(e, property, val);
    return e;
  });
};
