var Util = require('./Util.js');
var Q = require('q');

module.exports = function(results, option) {
  var collection = option.collection;
  var property   = option.property;
  var from       = option.from;
  var to         = option.to;

  // process results
  var list = results[collection];
  for (var i = 0, len = list.length; i < len; i++) {
    try {
      Util.setPropByString(list[i], property, Util.getPropByString(list[i], property).replace(from, to));
    } catch(err) {
      throw err;
    };
  }
};
