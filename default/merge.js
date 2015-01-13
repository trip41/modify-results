var _ = require('lodash');
var Q = require('q');
var Util = require('./Util.js');

module.exports = function(results, option) {
  var collection    = option.collection;
  var properties    = option.properties;
  var newProp       = option.newProp;
  var newProperties = option.newProperties || properties;

  results[collection] = _.map(results[collection], function(e, i) {
    var obj = {};
    _.forEach(newProperties, function(key, idx) {
      obj[key] = Util.getPropByString(e, properties[idx]);
      Util.deletePropByString(e, properties[idx]);
    });

    Util.setPropByString(e, newProp, obj);
    return e;
  });
};

