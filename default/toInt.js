var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(option) {
  var results       = this.results;
  var collection = option.collection;
  var property   = option.property;

  results[collection] = _.map(results[collection], function(e) {
    Util.setPropByString(e, property, parseInt(Util.getPropByString(e, property)));
    return e;
  });

  this.results = results;
};
