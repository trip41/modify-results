var Util = require('./Util.js');

module.exports = function(option) {
  var data       = this.data;
  var collection = option.collection;
  var property   = option.property;

  var from = option.from;
  var to   = option.to;

  // process data
  var list = data[collection];
  for (var i = 0, len = list.length; i < len; i++) {
    Util.setPropByString(list[i], property, Util.getPropByString(list[i], property).replace(from, to));
  }

  this.data = data;
};
