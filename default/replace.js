var Util = require('./Util.js');

module.exports = function(option) {
  var results       = this.results;
  var collection = option.collection;
  var property   = option.property;

  var from = option.from;
  var to   = option.to;

  // process results
  var list = results[collection];
  for (var i = 0, len = list.length; i < len; i++) {
    Util.setPropByString(list[i], property, Util.getPropByString(list[i], property).replace(from, to));
  }

  this.results = results;
};
