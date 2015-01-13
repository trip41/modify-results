[
  'sort',
  'split',
  'merge',
  'remove',
  'replace',
  'removeProp',
  'toInt',
  'toFloat',
  'renameProperty',
  'renameCollection',
  'currencyConvert',
  'custom'
].forEach(function(filter, idx, arr) {
  this[filter] = require('./' + filter + '.js');
}, module.exports);
