var _ = require('lodash');

module.exports = function(config) {
  var data = this.data;
  var collection = config.collection;
  var property = config.property;
  var newname = config.newname;

  var list = data[collection];
  for (var i = 0, len = list.length; i < len; i++) {
    var oldval = list[i][property];
    delete list[i][property];

    list[i][newname] = oldval;
  }

  this.data = data;
  return this;
};
