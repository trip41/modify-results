var request = require('request');
var Util    = require('./Util.js');
var Q       = require('q');
var _       = require('lodash');

var CURRENCY_API = 'http://finance.yahoo.com/d/quotes.csv?e=.csv&f=sl1d1t1&s=${from}${to}=X';

module.exports = function(option) {
  var self       = this;
  var data       = this.data;
  var collection = option.collection;
  var property   = option.property;
  var from       = option.from.toUpperCase();
  var to         = option.to.toUpperCase();
  var decimal    = option.decimal;

  var defer = Q.defer();
  var url = _.template(CURRENCY_API, { from: from, to: to });
  request(url, function(err, res, body) {
    var ratio = parseFloat(body.split(',')[1]);

    _.forEach(data[collection], function(val, key) {
      var oldVal = Util.getPropByString(val, property);
      var newVal = parseFloat(ratio * oldVal);

      if(decimal !== undefined) {
        newVal = newVal.toFixed(decimal);
      }
      
      Util.setPropByString(val, property, newVal);
    });

    self.data = data;
    defer.resolve(self);
  });
  
  return defer.promise;
};
