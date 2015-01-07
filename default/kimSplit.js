var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(config) {
  var data       = this.data;
  var collection = config.collection;
  var property   = config.property;
  var separator  = config.separator;
  var names      = config.names === undefined
    ? _.map(data[collection], function(e, i) { return property + '_' + i })
    : config.names;

  var prefix = property.split('.').splice(property.length, 1).join('.');
  names = _.map(names, function(name, idx) {
    return prefix === ''
      ? name
      : prefix + '.' + name;
  });

  data[collection] = _.map(data[collection], function(e, i) {
    var vals = Util.getPropByString(e, property).split(separator);

    _.forEach(names, function(key, idx) {
      Util.setPropByString(e, key, vals[idx]);
    });

    Util.deletePropByString(e, property);
    return e;
  });

  this.data = data;
  return this;
};

