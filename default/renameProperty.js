var _ = require('lodash');
var Util = require('./Util.js');

module.exports = function(option) {
  var results       = this.results;
  var collection = option.collection;
  var property   = option.property;
  var newname    = option.newname;
  var list       = results[collection];

  for (var i = 0, len = list.length; i < len; i++) {
    if(list[i][property] === undefined) continue;
    var oldval = Util.getPropByString(list[i], property);
    Util.deletePropByString(list[i], property);
    Util.setPropByString(list[i], newname, oldval);
  }

  this.results = results;
};
