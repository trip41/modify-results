var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(config) {
  var data = this.data;
  var collection = config.collection;
  var property   = config.property;
  var decimal    = config.decimal;

  data[collection] = _.map(data[collection], function(e) {
    var val = decimal === undefined
      ? parseFloat(Util.getPropByString(e, property))
      : parseFloat(Util.getPropByString(e, property)).toFixed(decimal);
    
    Util.setPropByString(e, property, val);
    return e;
  });

  this.data = data;
  return this;
};
