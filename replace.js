function kim_replace(config) {
  var self = this;

  self.collectionName = config.collectionName;
  self.attrName  config.attrName;

  self.from = config.from;
  self.to = config.to;

  // process data
  this.process = function(data, callback) {
    var list = data.results[collectionName];
    for (var i = 0, len = list.length; i < len; i++) {
      list[i][attrName] = list[i][attrName].replace(from, to);
    }

    callback(null, data);
  };
};



//module.exports = function replace(data, callback) {
//  var collectionName = "collection1";
//  var attrName       = "Karma";

//  var from = "points";
//  var to   = "pts";

//  var list = data.results[collectionName];
//  for (var i = 0, len = list.length; i < len; i++) {
//    list[i][attrName] = list[i][attrName].replace(from, to);
//  }

//  callback(null, data);
//}


