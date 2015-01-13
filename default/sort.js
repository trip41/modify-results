var Util = require('./Util.js');

module.exports = function(results, option) {
  var collection = option.collection;
  var property   = option.property;
  var lowToHigh  = option.lowToHigh === undefined ? 1 : option.lowToHigh;

  results[collection].sort(function(a, b) {
    var valA = Util.getPropByString(a, property);
    var valB = Util.getPropByString(b, property);

    if(valA < valB) return -1;
    else if(valA === valB) return 0;
    else return 1;
  });

  if(!lowToHigh) {
    results[collection].reverse();
  }
};
