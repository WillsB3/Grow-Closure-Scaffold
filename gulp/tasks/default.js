var ENVIRONMENTS = require('../environments');
var PATHS = require('../paths');

var concat = require('gulp-concat');
var path = require('path');
var runSequence = require('run-sequence');

module.exports = function(gulp) {
  return function(callback) {
    process.env.GULP_ENV = ENVIRONMENTS.DEV;

    return runSequence(
      'clean',
      'symlink:dev',
      [
        'sass',
        'closure-deps'
      ],
      'watch'
    );
  };
};
