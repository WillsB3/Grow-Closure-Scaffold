var ENVIRONMENTS = require('../environments');
var PATHS = require('../paths');

var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function(gulp) {
  return function() {
    const dev = process.env.GULP_ENV === ENVIRONMENTS.DEV;
    const sassOpts = {};

    if (dev) {
      sassOpts.outputStyle = 'expanded';
    } else {
      sassOpts.outputStyle = 'compressed';
    }

    return gulp.src(PATHS.CSS_SOURCES)
      .pipe(gulpif(dev, sourcemaps.init()))
        .pipe(sass(sassOpts).on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: ['last 2 versions', 'IE >= 10', '> 1%']
        }))
      .pipe(gulpif(dev, sourcemaps.write()))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(PATHS.DIST.CSS));
  };
};
