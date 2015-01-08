var Util = require('./Util.js');

module.exports = function(config) {
  var data       = this.data;
  var collection = config.collection;
  var property   = config.property;

  var list = data[collection];
  for (var i = 0, len = list.length; i < len; i++) {
    Util.deletePropByString(list[i], property);
  }

  this.data = data;
  return this;
};


