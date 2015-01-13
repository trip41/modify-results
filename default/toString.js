var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(results, option) {
  var results       = this.results;
  var collection = option.collection;
  var property   = option.property;
  var fn         = option.fn;

  results[collection] = _.map(results[collection], function(e) {
    Util.setPropByString(e, property, fn(Util.getPropByString(e, property)));
    return e;
  });
};
