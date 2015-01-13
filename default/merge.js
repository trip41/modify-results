var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(option) {
  var results          = this.results;
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

  this.results = results;
};

