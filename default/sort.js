var Util = require('./Util.js');

module.exports = function(config) {
  var data           = this.data;
  var collection     = config.collection;
  var property       = config.property;
  var lowToHigh      = config.lowToHigh === undefined ? 1 : config.lowToHigh;
  var numerical      = config.numerical === undefined ? 1 : config.numerical;

  data[collection].sort(function(a, b) {
    var valA = Util.getPropByString(a, property);
    var valB = Util.getPropByString(b, property);

    if(numerical) {
      valA = parseFloat(valA);
      valB = parseFloat(valB);
    }

    if(valA < valB) return -1;
    else if(valA === valB) return 0;
    else return 1;
  });

  if(!lowToHigh) {
    data[collection].reverse();
  }

  this.data = data;
};
