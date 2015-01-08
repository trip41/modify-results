var Util = require('./Util.js');

module.exports = function(option) {
  var data           = this.data;
  var collection     = option.collection;
  var property       = option.property;
  var lowToHigh      = option.lowToHigh === undefined ? 1 : option.lowToHigh;
  var numerical      = option.numerical === undefined ? 1 : option.numerical;

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
