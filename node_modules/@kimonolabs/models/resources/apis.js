'use strict';

/** 
 *  @fileOverview Interface for interacting with the Api data model
 *
 *  @author Kimono Labs
 *
 *  @requires NPM:async
 *  @requires NPM:lodash
 *  @requires ../config/errors:errors
 */

var errors = require('../config/errors');
var _ = require('lodash');

module.exports = function(db) {
  var Api = db.model('Api');

  /**
   *  Api resource interface
   *  @resource
   */
  var resource = {};

  /**
   * Returns a single API object
   * @memberOf resource
   *
   * @query {object} Key-value pairs of properties to query against
   * @opts {object} Settings that dictate the response signature
   * @opts.fields {array} List of fields to include (cannot be passed with excludes)
   * @opts.excludes {array} List of fields to exclude (cannot be passed with include)
   * @opts.includes {object} List of foreign-key references to populate, invalid values will be ignored
   * @opts.callback {function} Callback function with signature: function(err, obj) {...}
   *
   * @returns {object} Object representation of an API instance
   */
  resource.one = function(query, opts, callback) {
    if (opts.hasOwnProperty('fields') && opts.hasOwnProperty('excludes')) {
      return callback && callback(errors.getFormattedErr(null, 2));
    }

    var populate = opts.hasOwnProperty('includes') ? opts.includes.join(' ') : '';
    var fields = {};
    _.each(opts.fields, function(field) { fields[field] = 1; });
    _.each(opts.excludes, function(field) { fields[field] = 0; });

    Api
      .findOne(query, fields)
      .populate(populate)
      .exec(function(err, resp) {
        if (err) {
          return callback && callback(errors.getFormattedErr(err, 1));
        }
        return callback && callback(null, resp.toObject({virtuals: true}));
      });
  };


  /**
   * Returns a list of API object
   * @memberOf resource
   *
   * @query {object} Key-value pairs of properties to query against
   * @opts {object} Settings that dictate the response signature
   * @opts.fields {array} List of fields to include (cannot be passed with excludes)
   * @opts.excludes {array} List of fields to exclude (cannot be passed with include)
   * @opts.sort {object} Key-value pair of sorts to apply to the response set, order matters
   * @opts.limit {number} Number of objects to limit the size of the response
   * @opts.includes {object} List of foreign-key references to populate, invalid values will be ignored
   *
   * @returns {array} List of objects representing API instances
   */
  resource.list = function(query, callback) {
    Api.findOne(query, function(err, resp) {
      if (err) {
        return callback && callback(errors.getFormattedErr(err, 'DB Error'));
      }
      return callback && callback(null, resp.toObject({virtuals: true}));
    });
  };

  resource.create = function(obj, callback) {
    // new Api rather Api.create() so that pre-save hooks have access to instance methods.
    var api = new Api(obj);
    api.save(function(err, resp) {
      if (err) {
        return callback && callback(errors.getFormattedErr(err, 'DB Error'));
      }
      return callback && callback(null, resp.toObject({virtuals: true}));
    });
  };

  resource.update = function(query, update, callback) {
    Api.update(query, {$set: update}, {multi: true}, function(err, resp) {
      if (err) {
        return callback && callback(errors.getFormattedErr(err, 'DB Error'));
      }
      return callback && callback(null, true);
    });
  };

  resource.remove = function(query, callback) {
    Api.remove(query, function(err, resp) {
      if (err) {
        return callback && callback(errors.getFormattedErr(err, 'DB Error'));
      }
      return callback && callback(null, true);
    });
  };

  return resource;
};