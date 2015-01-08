var Util = require('./Util.js');

module.exports = function(option) {
  var data       = this.data;
  var collection = option.collection;
  var property   = option.property;

  var list = data[collection];
  for (var i = 0, len = list.length; i < len; i++) {
    Util.deletePropByString(list[i], property);
  }

  this.data = data;
};


