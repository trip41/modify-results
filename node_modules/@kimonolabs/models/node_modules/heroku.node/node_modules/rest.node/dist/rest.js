(function() {
  var Rest, RestError, http, q, request,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  q = require('q');

  http = require('http');

  request = require('request');

  RestError = (function(_super) {

    __extends(RestError, _super);

    function RestError(status_code, body, headers) {
      this.status_code = status_code;
      this.body = body;
      this.headers = headers;
      RestError.__super__.constructor.call(this);
      Error.captureStackTrace(this, arguments.callee);
      this.status_type = http.STATUS_CODES[status_code] || 'Unknown';
      this.message = status_code + ': ' + this.status_type;
      this.name = 'Rest.Error';
    }

    return RestError;

  })(Error);

  Rest = (function() {

    Rest.Error = RestError;

    Rest.request = request;

    function Rest(_rest_options) {
      var _base, _ref;
      this._rest_options = _rest_options != null ? _rest_options : {};
      if ((_ref = (_base = this._rest_options).debug) == null) {
        _base.debug = false;
      }
      this._rest_options.base_url = this._rest_options.base_url.replace(/\/+$/, '');
      this._rest_hooks = {};
    }

    Rest.prototype.hook = function(method, callback) {
      var _base, _ref;
      if ((_ref = (_base = this._rest_hooks)[method]) == null) {
        _base[method] = [];
      }
      return this._rest_hooks[method].push(callback);
    };

    Rest.prototype.create_full_url = function(path) {
      return this._rest_options.base_url + '/' + path.replace(/^\/+/, '');
    };

    Rest.prototype.parse_response_body = function(headers, body) {
      if (typeof body !== 'string') {
        return body;
      }
      return JSON.parse(body);
    };

    Rest.prototype.handle_response = function(err, res, body, callback) {
      var parsed_body;
      if (err != null) {
        return callback(err);
      }
      try {
        parsed_body = this.parse_response_body(res.headers, body);
      } catch (e) {

      }
      if (parseInt(res.statusCode / 100) !== 2) {
        return callback(new Rest.Error(res.statusCode, parsed_body, res.headers));
      }
      return callback(null, parsed_body);
    };

    Rest.prototype.create_request_opts = function(method, path, opts, overrides) {
      var hooks, k, request_opts, v;
      if (opts == null) {
        opts = {};
      }
      if (overrides == null) {
        overrides = {};
      }
      request_opts = {
        url: this.create_full_url(path),
        pool: false
      };
      hooks = (this._rest_hooks['pre:request'] || []).concat(this._rest_hooks['pre:' + method] || []);
      hooks.forEach(function(hook) {
        return hook(request_opts, opts);
      });
      for (k in overrides) {
        v = overrides[k];
        request_opts[k] = v;
      }
      return request_opts;
    };

    Rest.prototype.request = function(method, path, opts, callback, request_opts_overrides) {
      var d, hooks, req, request_opts,
        _this = this;
      if (typeof opts === 'function') {
        request_opts_overrides = callback;
        callback = opts;
        opts = null;
      }
      d = q.defer();
      d.promise.nodeify(callback);
      try {
        request_opts = this.create_request_opts(method, path, opts, request_opts_overrides);
        req = request[method](request_opts, function(err, res, body) {
          return _this.handle_response(err, res, body, function(err, data) {
            if (err != null) {
              return d.reject(err);
            }
            return d.resolve(data);
          });
        });
        hooks = (this._rest_hooks['post:' + method] || []).concat(this._rest_hooks['post:request'] || []);
        hooks.forEach(function(hook) {
          return hook(request_opts, opts, req);
        });
      } catch (err) {
        d.reject(err);
      }
      return d.promise;
    };

    Rest.prototype.head = function(path, opts, callback) {
      return this.request('head', path, opts, callback);
    };

    Rest.prototype.get = function(path, opts, callback) {
      return this.request('get', path, opts, callback);
    };

    Rest.prototype.post = function(path, opts, callback) {
      return this.request('post', path, opts, callback);
    };

    Rest.prototype.put = function(path, opts, callback) {
      return this.request('put', path, opts, callback);
    };

    Rest.prototype.patch = function(path, opts, callback) {
      return this.request('patch', path, opts, callback);
    };

    Rest.prototype["delete"] = function(path, opts, callback) {
      return this.request('del', path, opts, callback);
    };

    return Rest;

  })();

  module.exports = Rest;

}).call(this);
