var merge = require('merge');

module.exports = function(View) {
  View.extend = function(obj) {
    merge(View.prototype, obj);
  };
};