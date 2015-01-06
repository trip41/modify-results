module.exports = function transform(data, callback) {
  var collectionName = "collection1";
  var sortKey        = "Karma";
  var index          = 0;
  var separator      = " ";
  var lowToHigh      = 1;

  data.results[collectionName].sort(function(a, b) {
    var valA = a[sortKey];
    var valB = b[sortKey];

    if(index !== -1){
      valA = valA.split(separator)[index];
      valB = valB.split(separator)[index];
    }

    valA = parseFloat(valA);
    valB = parseFloat(valB);

    if(valA < valB) return -1;
    else if(valA === valB) return 0;
    else return 1;
  });

  if(!lowToHigh) {
    data.results[collectionName].reverse();
  }

  callback(null, data);
}
