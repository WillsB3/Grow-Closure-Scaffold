var PATHS = require('../paths');
var connect = require('gulp-connect');
var open = require('gulp-open');

module.exports = function (gulp) {
  return function (callback) {
    connect.server({
      root: PATHS.BUILD,
      port: 8888
    });

    gulp.src(__filename).pipe(open({uri: 'http://localhost:8888/'}));
  };
};
