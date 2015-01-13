module.exports = function(fn) {
  this.results = fn.call(this, this.results);
};
