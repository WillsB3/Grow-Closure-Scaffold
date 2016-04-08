var PATHS = require('../paths');

var debug = require('gulp-debug');
var sassLint = require('gulp-sass-lint');

module.exports = function(gulp) {
  return function() {
    return gulp.src(PATHS.CSS_SOURCES)
      // .pipe(debug({'title': 'scss-lint'}))
      .pipe(sassLint())
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError());
  };
};
