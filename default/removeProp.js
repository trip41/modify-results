var Util = require('./Util.js');
var _ = require('lodash');

module.exports = function(option) {
  var data       = this.data;
  var collection = option.collection;
  var properties = option.properties;
  var list       = data[collection];

  for (var i = 0, len = list.length; i < len; i++) {
    _.forEach(properties, function(prop, idx) {
      Util.deletePropByString(list[i], prop);
    });
  }
  this.data = data;
};


