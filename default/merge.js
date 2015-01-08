var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(config) {
  var data          = this.data;
  var collection    = config.collection;
  var properties    = config.properties;
  var newProp       = config.newProp;
  var newProperties = config.newProperties === undefined
     ? properties
     : config.newProperties;

  data[collection] = _.map(data[collection], function(e, i) {
    var obj = {};

    _.forEach(newProperties, function(key, idx) {
      obj[key] = Util.getPropByString(e, properties[idx]);
      Util.deletePropByString(e, properties[idx]);
    });

    Util.setPropByString(e, newProp, obj);
    return e;
  });

  this.data = data;
};

