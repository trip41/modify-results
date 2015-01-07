module.exports = function(config) {
  var data = this.data;
  var collection = config.collection;
  var attrName = config.attrName;

  var from = config.from;
  var to = config.to;

  // process data
  var list = data[collection];
  for (var i = 0, len = list.length; i < len; i++) {
    list[i][attrName] = list[i][attrName].replace(from, to);
  }

  this.data = data;
  return this;
};


