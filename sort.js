function kim_sort(config) {
  var self = this;

  self.collectionName = config.collectionName;
  self.sortKey        = config.sortKey;
  self.index          = config.index === undefined ? -1 : config.index;
  self.separator      = config.separator === undefined ? "" : config.separator;
  self.lowToHigh      = config.lowToHigh === undefined ? 1 : config.lowToHigh;
  self.numerical      = config.numerical === undefined ? 1 : config.numerical;

  // transform data
  this.process(data, callback) {
    data.results[self.collectionName].sort(function(a, b) {
      var valA = a[self.sortKey];
      var valB = b[self.sortKey];

      if(self.index !== -1){
        valA = valA.split(self.separator)[self.index];
        valB = valB.split(self.separator)[self.index];
      }

      if(numerical) {
        valA = parseFloat(valA);
        valB = parseFloat(valB);
      }

      if(valA < valB) return -1;
      else if(valA === valB) return 0;
      else return 1;
    });

    if(!self.lowToHigh) {
      data.results[self.collectionName].reverse();
    }

    callback(null, data);
  };
}

//module.exports = function sort(data, callback) {
//  var collectionName = "collection1";
//  var sortKey        = "Karma";
//  var index          = 0;
//  var separator      = " ";
//  var lowToHigh      = 1;
//  var numerical      = 1;

//  data.results[collectionName].sort(function(a, b) {
//    var valA = a[sortKey];
//    var valB = b[sortKey];

//    if(index !== -1){
//      valA = valA.split(separator)[index];
//      valB = valB.split(separator)[index];
//    }

//    if(numerical) {
//      valA = parseFloat(valA);
//      valB = parseFloat(valB);
//    }

//    if(valA < valB) return -1;
//    else if(valA === valB) return 0;
//    else return 1;
//  });

//  if(!lowToHigh) {
//    data.results[collectionName].reverse();
//  }

//  callback(null, data);
//}

