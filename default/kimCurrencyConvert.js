var csv     = require('csv');
var request = require('request');
var Util    = require('./Util.js');
var Q       = require('q');
var _       = require('lodash');

module.exports = function(config) {
  var self       = this;
  var data       = this.data;
  var collection = config.collection;
  var property   = config.property;
  var from       = config.from.toUpperCase();
  var to         = config.to.toUpperCase();
  var decimal    = config.decimal;

  var defer = Q.defer();
  request('http://finance.yahoo.com/d/quotes.csv?e=.csv&f=sl1d1t1&s=' + from + to + '=X', function(err, res, body) {
    var ratio = parseFloat(body.split(',')[1]);

    _.forEach(data[collection], function(val, key) {
      var oldVal = Util.getPropByString(val, property);
      var newVal = ratio * oldVal;
      Util.setPropByString(val, property, decimal === undefined ? newVal : newVal.toFixed(decimal));
    });

    self.data = data;
    defer.resolve(self);
  });
  
  return defer.promise;
};


