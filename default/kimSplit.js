var _ = require('lodash');

module.exports = function(config) {
  var data       = this.data;
  var collection = config.collection;
  var property   = config.property;
  var separator  = config.separator;
  var names      = config.names === undefined
    ? _.map(data[collection], function(e, i) { return property + '_' + i })
    : config.names;

  data[collection] = _.map(data[collection], function(e, i) {
    var oldval = e[property];
    var vals = oldval.split(separator);

    _.forEach(names, function(key, idx) {
      e[key] = vals[idx];
    });

    delete e[property];
    return e;
  });

  this.data = data;
  return this;
};

