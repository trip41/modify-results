var _      = require('lodash');
var moment = require('moment');
var Util   = require('./Util.js');

module.exports = function(config) {
  var data          = this.data;

  var collection    = config.collection;
  var property      = config.property;
  var fromFormat    = config.fromFormat;
  var toFormat      = config.toFormat;

  _.forEach(data, function(e) {
    var oldval = Util.getPropByString(e, properties);
    var newval = moment(oldval, fromFormat).format(toFormat);
    Util.setPropByString(e, property, newval);
  });

  this.data = data;
  return this;
};

