var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(config) {
  var data = this.data;
  var collection = config.collection;
  var property = config.property;

  data[collection] = _.map(data[collection], function(e) {
    Util.setPropByString(e, property, parseInt(Util.getPropByString(e, property)));
    return e;
  });

  this.data = data;
  return this;
};
