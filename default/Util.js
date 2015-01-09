module.exports = {
  getPropByString: function(obj, propString) {
      if (!propString)
          return obj;

      var prop, props = propString.split('.');

      for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
          prop = props[i];

          var candidate = obj[prop];
          if (candidate !== undefined) {
              obj = candidate;
          } else {
            return;
          }
      }
      return obj[props[i]];
  },

  setPropByString: function(obj, propString, val) {
    if(!propString)
      return obj;

    var prop, props = propString.split('.');
    for (var i = 0, ilen = props.length - 1; i < ilen; i++) {
      prop = props[i];

      var candidate = obj[prop];
      if(candidate !== undefined) {
        obj = candidate;
      } else {
        return;
      }
    }

    obj[props[i]] = val;
  },

  deletePropByString: function(obj, propString) {
    if(!propString)
      return obj;

    var prop, props = propString.split('.');
    for (var i = 0, len = props.length - 1; i < len; i++) {
      prop = props[i];

      var candidate = obj[prop];
      if(candidate !== undefined) {
        obj = candidate;
      } else {
        return;
      }
    }
    
    delete obj[props[i]];
  }
};
