var PATHS = require('../paths');

var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

var onError = require('../utils/on-error');

module.exports = function (gulp) {
  return function (callback) {
    var sassOpts = {
      outputStyle: 'compressed'
    };

    gulp.src(PATHS.CSS_SOURCES)
      .pipe(plumber({
        errorHandler: onError
      }))
      .pipe(sass(sassOpts))
      .pipe(autoprefixer({
        browsers: ['last 2 versions', 'IE >= 9', '> 1%']
      }))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(PATHS.DIST.CSS))
      .on('end', callback);
  };
};
