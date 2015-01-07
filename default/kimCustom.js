module.exports = function(fn) {
  this.data = fn.call(this, this.data);
  return this;
};
