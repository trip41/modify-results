var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(option) {
  var data       = this.data;
  var collection = option.collection;
  var property   = option.property;

  data[collection] = _.map(data[collection], function(e) {
    Util.setPropByString(e, property, parseInt(Util.getPropByString(e, property)));
    return e;
  });

  this.data = data;
};
