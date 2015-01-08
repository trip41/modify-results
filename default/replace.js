var Util = require('./Util.js');

module.exports = function(config) {
  var data       = this.data;
  var collection = config.collection;
  var property   = config.property;
  var isRegex    = config.isRegex;

  var from = config.from;
  var to   = config.to;

  // process data
  var list = data[collection];
  for (var i = 0, len = list.length; i < len; i++) {
    Util.setPropByString(list[i], property, Util.getPropByString(list[i], property).replace(from, to));
  }

  this.data = data;
};
