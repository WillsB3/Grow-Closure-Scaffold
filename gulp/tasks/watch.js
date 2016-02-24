var PATHS = require('../paths');

module.exports = function(gulp) {
  return function() {
    gulp.watch([PATHS.CSS_SOURCES], ['sass', 'lint-scss']);
    gulp.watch([PATHS.JS_SOURCES], ['lint-js']);
  };
};
