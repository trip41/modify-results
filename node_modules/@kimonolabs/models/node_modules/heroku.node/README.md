# heroku.node

[Heroku API](https://api-docs.heroku.com) client for node.js

## Installation
```
npm install heroku.node
```

## Usage

```javascript
var Heroku = require('heroku.node');

var client = new Heroku({email: '...', api_key: '...'});
// Do something with client

client.apps.list(function(err, apps) {
  console.log(apps);
});

// You can also use any method as a promise
client.apps.list().then(function(apps) {
  console.log(apps);
});

```

## Constructors

#### new Heroku({email: '...', api_key: '...'})

## Methods

### Apps API

#### client.apps.list(callback)

#### client.app('app-name').get(callback)
#### client.app('app-name').maintenance_mode_on(callback)
#### client.app('app-name').maintenance_mode_off(callback)
#### client.app('app-name').destroy(callback)

### Dynos API

#### client.app('app-name').dynos.list(callback)
#### client.app('app-name').dynos.restart(callback)
#### client.app('app-name').processes.stop_type('process-type', callback)
#### client.app('app-name').processes.scale('process-type', quantity, callback)

#### client.app('app-name').dyno('dyno-id').get(callback)
#### client.app('app-name').dyno('dyno-id').restart(callback)
#### client.app('app-name').dyno('dyno-id').stop(callback)

## License
Copyright (c) 2013 Matt Insler  
Licensed under the MIT license.
