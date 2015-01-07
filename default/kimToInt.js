var _ = require('lodash');

module.exports = function(config) {
  var data = this.data;
  var collection = config.collection;
  var property = config.property;

  data[collection] = _.map(data[collection], function(e) {
    e[property] = parseInt(e[property]);
    return e;
  });

  this.data = data;
  return this;
};
