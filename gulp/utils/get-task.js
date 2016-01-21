var gulp = require('gulp');
var path = require('path');

module.exports = function(name) {
  var p = path.join(__dirname, '..', '..', 'gulp', 'tasks', name);
  return require(p)(gulp);
};
