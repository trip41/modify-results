var _ = require('lodash');

module.exports = function(config) {
  var data       = this.data;
  var collection = config.collection;
  var properties   = config.properties;
  var newProperties = config.newProperties === undefined
     ? properties
     : config.newProperties;

  var propName = config.propName;

  data[collection] = _.map(data[collection], function(e, i) {
    var obj = {};
    _.forEach(newProperties, function(key, idx) {
      obj[key] = e[properties[idx]];
      delete e[properties[idx]];
    });

    e[propName] = obj;
    return e;
  });

  this.data = data;
  return this;
};

