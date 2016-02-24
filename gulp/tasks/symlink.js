var PATHS = require('../paths');

var fs = require('fs');

module.exports = function(gulp) {
  return {
    dev: function() {
      if (!fs.existsSync(PATHS.DIST.ROOT)) {
        fs.mkdirSync(PATHS.DIST.ROOT);
      }

      // Create symlink for source/js -> dist/js to allow us to use uncompiled
      // js locally.
      if (!fs.existsSync(__dirname + '/../../dist/js')) {
        fs.symlinkSync(__dirname + '/../../source/js', __dirname + '/../../dist/js');
      }

      // Create symlink for closure library
      if (!fs.existsSync(__dirname + '/../../source/js/closure-library')) {
        fs.symlinkSync(__dirname + '/../../node_modules/google-closure-library', __dirname + '/../../source/js/closure-library');
      }
    }
  };
};
