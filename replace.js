module.exports = function transform(data, callback) {
  var collectionName = "collection1";
  var attrName       = "Karma";

  var from = "points";
  var to   = "pts";

  var list = data.results[collectionName];
  for (var i = 0, len = list.length; i < len; i++) {
    list[i][attrName] = list[i][attrName].replace(from, to);
  }

  callback(null, data);
}
