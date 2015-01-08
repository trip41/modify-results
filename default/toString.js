var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(option) {
  var data       = this.data;
  var collection = option.collection;
  var property   = option.property;
  var fn         = option.fn;

  data[collection] = _.map(data[collection], function(e) {
    Util.setPropByString(e, property, fn(Util.getPropByString(e, property)));
    return e;
  });

  this.data = data;
};
