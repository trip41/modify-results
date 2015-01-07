module.exports = function(config) {
  var data = this.data;
  var collection = config.collection;
  var attrName = config.attrName;

  var list = data[collection];
  for (var i = 0, len = list.length; i < len; i++) {
    delete list[i][attrName];
  }

  this.data = data;
  return this;
};


