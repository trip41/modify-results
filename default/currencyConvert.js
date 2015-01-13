var request = require('request');
var Util    = require('./Util.js');
var Q       = require('q');
var _       = require('lodash');

var CURRENCY_API = 'http://finance.yahoo.com/d/quotes.csv?e=.csv&f=sl1d1t1&s=${from}${to}=X';

module.exports = function(results, option) {
  var collection = option.collection;
  var property   = option.property;
  var from       = option.from.toUpperCase();
  var to         = option.to.toUpperCase();
  var decimal    = option.decimal;

  var deferred = Q.defer();
  var url = _.template(CURRENCY_API, { from: from, to: to });
  request(url, function(err, res, body) {
    var ratio = parseFloat(body.split(',')[1]);
    _.forEach(results[collection], function(val, key) {
      var oldVal = Util.getPropByString(val, property);
      var newVal = parseFloat(ratio * oldVal);

      if(decimal !== undefined) {
        newVal = parseFloat(newVal.toFixed(decimal));
      }
      Util.setPropByString(val, property, newVal);
    });
    deferred.resolve();
  });
  return deferred.promise;
};
