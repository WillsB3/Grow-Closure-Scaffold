var PATHS = require('../paths');

var closureCompiler = require('google-closure-compiler').gulp();
var debug = require('gulp-debug');
var sort = require('gulp-sort');
var path = require('path');

module.exports = function(gulp) {
  return function() {
    var appJs = PATHS.JS_SOURCES;
    var jsFiles = appJs.concat([
      PATHS.NPM + 'google-closure-library/closure/goog/**/*.js',
      '!' + PATHS.NPM + 'google-closure-library/closure/goog/**/*_test.js'
    ]);

    return gulp.src(jsFiles)
      .pipe(sort())
      // .pipe(debug({'title': 'compile-js'}))
      .pipe(closureCompiler({
        'closure_entry_point': 'scaffold',
        'compilation_level': 'ADVANCED_OPTIMIZATIONS',
        'dependency_mode': 'STRICT',
        'entry_point': 'goog:scaffold',
        'externs': [
          path.join(PATHS.SRC.JS, 'externs', 'modernizr.js')
        ],
        'generate_exports': true,
        'js_output_file': 'site.min.js',
        'output_wrapper': '(function(){%output%})();'
      }))
      .pipe(gulp.dest(PATHS.DIST.JS));
  };
};
