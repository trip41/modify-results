var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(results, option) {
  var collection = option.collection;
  var properties   = option.properties;
  var newnames    = option.newnames;
  var list       = results[collection];

  for (var i = 0, len = list.length; i < len; i++) {
    properties.forEach(function(property, idx, arr) {
      if(Util.getPropByString(list[i], properties[i]) === undefined) return;
      var oldval = Util.getPropByString(list[i], property);
      Util.deletePropByString(list[i], property);
      Util.setPropByString(list[i], newnames[idx], oldval);
    });
  }
};
