var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(config) {
  var data       = this.data;
  var collection = config.collection;
  var property   = config.property;
  var newname    = config.newname;

  var list = data[collection];
  for (var i = 0, len = list.length; i < len; i++) {
    var oldval = Util.getPropByString(list[i], property);

    Util.deletePropByString(list[i], property);
    Util.setPropByString(list[i], newname, oldval);
  }

  this.data = data;
  return this;
};
