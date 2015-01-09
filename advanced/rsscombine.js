// for API: https://www.kimonolabs.com/apis/7zrc4qja#advanced

function transform(data, callback) {
  // filter functions are passed the whole API response object
  // you may manipulate or add to this data as you want

  // query parameters exist in the global scope, for example:
  // http://www.kimonolabs.com/apis/<API_ID>/?apikey=<API_KEY>&myparam=test
  // query.myparam == 'test'; // true

  // pass the transformed data to the callback function
  // the callback has a signature (err, callback)
  var collection = data.results.collection1;
  for (var i = 0; i < collection.length; i++){
   var row = collection[i];
   row.description = row.pubDate + " - " + row.category + " - " + row.author + " - " + row.description;
   delete row.author;
   delete row.category;
   delete row.pubDate;
 }
 
 callback(null, data);
}