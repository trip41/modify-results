Rest = require 'rest.node'

Api = {
  Apps: class AppsApi
    constructor: (@client) ->
    list: (cb) -> @client.get('/apps', cb)
  
  App: class AppApi
    constructor: (@client, @app) ->
      @dynos = new Api.Dynos(@client, @app)
    get: (cb) -> @client.get("/apps/#{@app}", cb)
    maintenance_mode_on: (cb) -> @client.patch("/apps/#{@app}", {maintenance: true}, cb)
    maintenance_mode_off: (cb) -> @client.patch("/apps/#{@app}", {maintenance: false}, cb)
    destroy: (cb) -> @client.delete("/apps/#{@app}", cb)
    dyno: (id) -> new Api.Dyno(@client, @app, id)
  
  Dynos: class DynosApi
    constructor: (@client, @app) ->
    list: (cb) -> @client.get("/apps/#{@app}/dynos", cb)
    
    restart: (cb) -> @client.delete("/apps/#{@app}/dynos", cb)
    
    # restart_type: (type, cb) -> @client.post("/apps/#{@app}/ps/restart", {type: type}, cb)
    
    # stop: (cb) -> @client.post("/apps/#{@app}/ps/stop", cb)
    stop_type: (type) -> @scale(type, 0, cb)
    scale: (type, quantity, cb) -> @client.patch("/apps/#{@app}/formation/#{type}", {qty: quantity}, cb)
  
  Dyno: class DynoApi
    constructor: (@client, @app, @dyno) ->
    get: (cb) -> @client.get("/apps/#{@app}/dynos/#{@dyno}", cb)
    restart: (cb) -> @client.delete("/apps/#{@app}/dynos/#{@dyno}", cb)
    stop: (cb) -> @client.post("/apps/#{@app}/ps/stop", {ps: @process}, cb)
}

class Heroku extends Rest
  @hooks:
    headers: (request_opts, opts) ->
      request_opts.headers ?= {}
      request_opts.headers.Accept = 'application/vnd.heroku+json; version=3'
      request_opts.headers['User-Agent'] = 'heroku.node'
    
    api_key: (email, api_key) ->
      (request_opts, opts) ->
        request_opts.headers ?= {}
        request_opts.headers.Authorization = 'Basic ' + new Buffer(email + ':' + api_key).toString('base64')
    
    get: (request_opts, opts) ->
      request_opts.qs = opts
    
    post: (request_opts, opts) ->
      request_opts.form = opts
  
  constructor: (@options = {}) ->
    super(base_url: 'https://api.heroku.com')
    
    @hook('pre:request', Heroku.hooks.headers)
    @hook('pre:request', Heroku.hooks.api_key(@options.email, @options.api_key)) if @options.email? and @options.api_key?
    # @hook('pre:get', Github.hooks.get)
    @hook('pre:post', Heroku.hooks.post)
    
    @apps = new Api.Apps(@)
  
  app: (app) -> new Api.App(@, app)
  
module.exports = Heroku
