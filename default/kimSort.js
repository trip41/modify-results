module.exports = function(config) {
  var data           = this.data;
  var collection     = config.collection;
  var attrName       = config.attrName;
  var lowToHigh      = config.lowToHigh === undefined ? 1 : config.lowToHigh;
  var numerical      = config.numerical === undefined ? 1 : config.numerical;

  data[collection].sort(function(a, b) {
    var valA = a[attrName];
    var valB = b[attrName];

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
  return this;
};
