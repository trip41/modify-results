var Util = require('./Util.js');
var _ = require('lodash');

module.exports = function(results, option) {
  var collection = option.collection;
  var properties = option.properties;
  var list       = results[collection];

  for (var i = 0, len = list.length; i < len; i++) {
    _.forEach(properties, function(prop, idx) {
      Util.deletePropByString(list[i], prop);
    });
  }
};


