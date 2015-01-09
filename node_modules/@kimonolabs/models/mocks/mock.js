'use strict';

var apis = require('./apis.json'),
    users = require('./users.json');

module.exports = function(secret) {
  return {
    Api: {
      one: function(query, fields, opts, callback) {
        callback(null, apis[0]);
      },
      list: function(query, fields, opts, callback) {
        callback(null, apis);
      },
      create: function(apiObj, callback) {
        callback(null, apis[0]);
      },
      update: function(query, updateObj, callback) {
        callback(null, apis[0]);
      },
      remove: function(query, callback) {
        callback(null, 1);
      }
    },
    User: {
      one: function(query, fields, opts, callback) {
        callback(null, users[0]);
      },
      list: function(query, fields, opts, callback) {
        callback(null, users);
      },
      create: function(apiObj, callback) {
        callback(null, users[0]);
      },
      update: function(query, updateObj, callback) {
        callback(null, users[0]);
      },
      remove: function(query, callback) {
        callback(null, 1);
      }
    }
  };
};