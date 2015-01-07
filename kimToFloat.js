var _ = require('lodash');

module.exports = function(config) {
  var data = this.data;
  var collection = config.collection;
  var property   = config.property;
  var decimal    = config.decimal;

  data[collection] = _.map(data[collection], function(e) {
    if(decimal === undefined) {
      e[property] = parseFloat(e[property]);
    } else {
      e[property] = parseFloat(e[property]).toFixed(decimal);
    }
    return e;
  });

  this.data = data;
  return this;
};
