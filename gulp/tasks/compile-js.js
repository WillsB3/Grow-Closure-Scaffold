var PATHS = require('../paths');

var closureCompiler = require('gulp-closure-compiler');
var debug = require('gulp-debug');
var sort = require('gulp-sort');
var path = require('path');

module.exports = function(gulp) {
  return function() {
    var appJs = PATHS.JS_SOURCES;
    var jsFiles = appJs.concat([
      PATHS.NPM + 'google-closure-library/**/*.js',
      '!' + PATHS.NPM + 'google-closure-library/**/*_test.js'
    ]);

    return gulp.src(jsFiles)
      .pipe(sort())
      .pipe(debug({'title': 'compile-js'}))
      .pipe(closureCompiler({
        compilerPath: path.join(PATHS.NPM, 'google-closure-compiler', 'compiler.jar'),
        compilerFlags: {
          'externs': [
            path.join(PATHS.SRC.JS, 'externs', 'modernizr.js')
          ],
          'closure_entry_point': 'scaffold',
          'compilation_level': 'ADVANCED_OPTIMIZATIONS',
          'generate_exports': true,
          'manage_closure_dependencies': true,
          'only_closure_dependencies': true,
          'output_wrapper': '(function(){%output%})();'
        },
        fileName: 'site.min.js'
      }))
      .pipe(gulp.dest(PATHS.DIST.JS));
  };
};
