var PATHS = require('../paths');

var closureDeps = require('gulp-closure-deps');
var debug = require('gulp-debug');

var path = require('path');

module.exports = function (gulp) {
  return function () {
    return gulp.src(PATHS.JS_SOURCES)
      // .pipe(debug({'title': 'closure-deps'}))
      .pipe(closureDeps({
        fileName: 'deps.js',
        prefix: '../../../..',
        baseDir: 'source/'
      }))
      .pipe(gulp.dest(PATHS.DIST.JS));
  };
};
