var PATHS = require('../paths');

var debug = require('gulp-debug');
var scsslint = require('gulp-scss-lint');

module.exports = function (gulp) {
  return function () {
    return gulp.src(PATHS.CSS_SOURCES)
      // .pipe(debug({'title': 'scss-lint'}))
      .pipe(scsslint());
  };
};
