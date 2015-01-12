var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(option) {
  var data       = this.data;
  var collection = option.collection;
  var property   = option.property;
  var decimal    = option.decimal || 0;

  data[collection] = _.map(data[collection], function(e) {
    var val = decimal === undefined
      ? parseFloat(Util.getPropByString(e, property))
      : parseFloat(parseFloat(Util.getPropByString(e, property)).toFixed(decimal));

    Util.setPropByString(e, property, val);
    return e;
  });

  this.data = data;
};
