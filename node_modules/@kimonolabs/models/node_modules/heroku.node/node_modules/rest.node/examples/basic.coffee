Rest = require '../lib/rest'
client = new Rest({base_url: 'https://api.github.com'})

client.get '/users/mattinsler/repos', {qs: {type: 'all', sort: 'pushed', direction: 'desc'}}, (err, list) ->
  return console.error(err.stack) if err?
  
  list.forEach (r) ->
    console.log "#{r.pushed_at}: #{r.full_name}"
