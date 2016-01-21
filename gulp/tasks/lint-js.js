var PATHS = require('../paths');

var gjslint = require('gulp-gjslint');
var debug = require('gulp-debug');

var path = require('path');

module.exports = function (gulp) {
  return function (callback) {
    var appJs = PATHS.JS_SOURCES;
    var thirdPartyJs = [
      '!' + path.join(PATHS.SRC.JS, 'closure-library', '**', '*')
    ];

    gulp.src(appJs.concat(thirdPartyJs))
      // .pipe(debug({title: 'lint-js'}))
      .pipe(gjslint())
      .pipe(gjslint.reporter('console'))
      .on('finish', callback);
  };
};
