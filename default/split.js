var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(results, option) {
  var collection = option.collection;
  var property   = option.property;
  var separator  = option.separator;
  var names      = option.names;

  var prefix = property.split('.').splice(property.length, 1).join('.');

  results[collection] = _.map(results[collection], function(e, i) {
    var vals = Util.getPropByString(e, property).split(separator);

    if(names === undefined) {
      names = _.map(vals, function(val, idx, arr) {
          return property + '_' + idx;
      });
    }

    names = _.map(names, function(name, idx) {
      return prefix === '' ? name : prefix + '.' + name;
    });

    _.forEach(names, function(key, idx) {
      Util.setPropByString(e, key, vals[idx]);
    });

    Util.deletePropByString(e, property);
    return e;
  });
};

