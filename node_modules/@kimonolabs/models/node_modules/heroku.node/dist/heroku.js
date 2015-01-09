(function() {
  var Api, AppApi, AppsApi, DynoApi, DynosApi, Heroku, Rest,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Rest = require('rest.node');

  Api = {
    Apps: AppsApi = (function() {
      function AppsApi(client) {
        this.client = client;
      }

      AppsApi.prototype.list = function(cb) {
        return this.client.get('/apps', cb);
      };

      return AppsApi;

    })(),
    App: AppApi = (function() {
      function AppApi(client, app) {
        this.client = client;
        this.app = app;
        this.dynos = new Api.Dynos(this.client, this.app);
      }

      AppApi.prototype.get = function(cb) {
        return this.client.get("/apps/" + this.app, cb);
      };

      AppApi.prototype.maintenance_mode_on = function(cb) {
        return this.client.patch("/apps/" + this.app, {
          maintenance: true
        }, cb);
      };

      AppApi.prototype.maintenance_mode_off = function(cb) {
        return this.client.patch("/apps/" + this.app, {
          maintenance: false
        }, cb);
      };

      AppApi.prototype.destroy = function(cb) {
        return this.client["delete"]("/apps/" + this.app, cb);
      };

      AppApi.prototype.dyno = function(id) {
        return new Api.Dyno(this.client, this.app, id);
      };

      return AppApi;

    })(),
    Dynos: DynosApi = (function() {
      function DynosApi(client, app) {
        this.client = client;
        this.app = app;
      }

      DynosApi.prototype.list = function(cb) {
        return this.client.get("/apps/" + this.app + "/dynos", cb);
      };

      DynosApi.prototype.restart = function(cb) {
        return this.client["delete"]("/apps/" + this.app + "/dynos", cb);
      };

      DynosApi.prototype.stop_type = function(type) {
        return this.scale(type, 0, cb);
      };

      DynosApi.prototype.scale = function(type, quantity, cb) {
        return this.client.patch("/apps/" + this.app + "/formation/" + type, {
          qty: quantity
        }, cb);
      };

      return DynosApi;

    })(),
    Dyno: DynoApi = (function() {
      function DynoApi(client, app, dyno) {
        this.client = client;
        this.app = app;
        this.dyno = dyno;
      }

      DynoApi.prototype.get = function(cb) {
        return this.client.get("/apps/" + this.app + "/dynos/" + this.dyno, cb);
      };

      DynoApi.prototype.restart = function(cb) {
        return this.client["delete"]("/apps/" + this.app + "/dynos/" + this.dyno, cb);
      };

      DynoApi.prototype.stop = function(cb) {
        return this.client.post("/apps/" + this.app + "/ps/stop", {
          ps: this.process
        }, cb);
      };

      return DynoApi;

    })()
  };

  Heroku = (function(_super) {
    __extends(Heroku, _super);

    Heroku.hooks = {
      headers: function(request_opts, opts) {
        if (request_opts.headers == null) {
          request_opts.headers = {};
        }
        request_opts.headers.Accept = 'application/vnd.heroku+json; version=3';
        return request_opts.headers['User-Agent'] = 'heroku.node';
      },
      api_key: function(email, api_key) {
        return function(request_opts, opts) {
          if (request_opts.headers == null) {
            request_opts.headers = {};
          }
          return request_opts.headers.Authorization = 'Basic ' + new Buffer(email + ':' + api_key).toString('base64');
        };
      },
      get: function(request_opts, opts) {
        return request_opts.qs = opts;
      },
      post: function(request_opts, opts) {
        return request_opts.form = opts;
      }
    };

    function Heroku(options) {
      this.options = options != null ? options : {};
      Heroku.__super__.constructor.call(this, {
        base_url: 'https://api.heroku.com'
      });
      this.hook('pre:request', Heroku.hooks.headers);
      if ((this.options.email != null) && (this.options.api_key != null)) {
        this.hook('pre:request', Heroku.hooks.api_key(this.options.email, this.options.api_key));
      }
      this.hook('pre:post', Heroku.hooks.post);
      this.apps = new Api.Apps(this);
    }

    Heroku.prototype.app = function(app) {
      return new Api.App(this, app);
    };

    return Heroku;

  })(Rest);

  module.exports = Heroku;

}).call(this);
