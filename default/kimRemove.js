var _ = require('lodash');

module.exports = function(config) {
  var data = this.data;
  var collection = config.collection;
  var property = config.property;
  var condFn = config.condFn;

  data[collection] = _.filter(data[collection], function(e) {
    return !condFn(e[property]);
  });

  this.data = data;
  return this;
};
