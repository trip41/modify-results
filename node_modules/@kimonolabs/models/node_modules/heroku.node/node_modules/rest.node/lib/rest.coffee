q = require 'q'
http = require 'http'
request = require 'request'

class RestError extends Error
  constructor: (@status_code, @body, @headers) ->
    super()
    Error.captureStackTrace(@, arguments.callee)
    @status_type = http.STATUS_CODES[status_code] or 'Unknown'
    @message = status_code + ': ' + @status_type
    @name = 'Rest.Error'

class Rest
  @Error: RestError
  @request: request
  
  constructor: (@_rest_options = {}) ->
    @_rest_options.debug ?= false
    @_rest_options.base_url = @_rest_options.base_url.replace(/\/+$/, '')
    
    @_rest_hooks = {}
  
  hook: (method, callback) ->
    @_rest_hooks[method] ?= []
    @_rest_hooks[method].push(callback)
  
  create_full_url: (path) ->
    @_rest_options.base_url + '/' + path.replace(/^\/+/, '')
  
  parse_response_body: (headers, body) ->
    return body unless typeof body is 'string'
    JSON.parse(body)
  
  handle_response: (err, res, body, callback) ->
    return callback(err) if err?
    
    try
      parsed_body = @parse_response_body(res.headers, body)
    catch e
    
    return callback(new Rest.Error(res.statusCode, parsed_body, res.headers)) unless parseInt(res.statusCode / 100) is 2
    callback(null, parsed_body)
  
  create_request_opts: (method, path, opts, overrides) ->
    opts ?= {}
    overrides ?= {}
    
    request_opts =
      url: @create_full_url(path)
      pool: false
    
    hooks = (@_rest_hooks['pre:request'] or []).concat(@_rest_hooks['pre:' + method] or [])
    hooks.forEach (hook) -> hook(request_opts, opts)
    
    request_opts[k] = v for k, v of overrides
    
    request_opts
  
  request: (method, path, opts, callback, request_opts_overrides) ->
    if typeof opts is 'function'
      request_opts_overrides = callback
      callback = opts
      opts = null
    
    d = q.defer()
    d.promise.nodeify(callback)
    
    try
      request_opts = @create_request_opts(method, path, opts, request_opts_overrides)
    
      req = request[method] request_opts, (err, res, body) =>
        @handle_response err, res, body, (err, data) ->
          return d.reject(err) if err?
          d.resolve(data)
    
      hooks = (@_rest_hooks['post:' + method] or []).concat(@_rest_hooks['post:request'] or [])
      hooks.forEach (hook) -> hook(request_opts, opts, req)
    catch err
      d.reject(err)
    
    d.promise
  
  head: (path, opts, callback) ->
    @request('head', path, opts, callback)
  
  get: (path, opts, callback) ->
    @request('get', path, opts, callback)
  
  post: (path, opts, callback) ->
    @request('post', path, opts, callback)
  
  put: (path, opts, callback) ->
    @request('put', path, opts, callback)
  
  patch: (path, opts, callback) ->
    @request('patch', path, opts, callback)
  
  delete: (path, opts, callback) ->
    @request('del', path, opts, callback)

module.exports = Rest
