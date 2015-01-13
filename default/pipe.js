module.exports = kimPipe(results, callback, filters) {
  var cb = function(err, results) {
    if(err) return callback(err, results);
  };

  for (var i = 0, len = filters.length; i < len; ++i) {
    filters[i](results, cb);
  }
  
  callback(null, results);
};

