module.exports = kimPipe(data, callback, filters) {
  var cb = function(err, data) {
    if(err) return callback(err, data);
  };

  for (var i = 0, len = filters.length; i < len; ++i) {
    filters[i](data, cb);
  }
  
  callback(null, data);
};

