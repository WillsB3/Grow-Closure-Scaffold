var PATHS = require('../paths');

var del = require('del');
var path = require('path');

module.exports = function (gulp) {
  return function (callback) {
    del.sync(PATHS.DIST.ROOT);
    del.sync(PATHS.TMP);
    del.sync(path.join('source', 'js', 'closure-library'));
    callback();
  };
};
