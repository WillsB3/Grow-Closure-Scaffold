module.exports = PATHS = {
  BOWER: './bower_components/',
  BUILD: './build',
  NPM: './node_modules/',
  DIST: {
    ROOT: './dist/',
    CSS: './dist/css/',
    JS: './dist/js/'
  },
  SRC: {
    ROOT: './source/',
    SCSS: './source/sass/',
    IMG: './source/img/',
    JS: './source/js/'
  },
  TMP: './.tmp/'
};

PATHS.CSS_SOURCES = [
  PATHS.SRC.SCSS + '/**/*.scss'
];

PATHS.JS_SOURCES = [
  PATHS.SRC.JS + '**/*.js',
  '!' + PATHS.SRC.JS + 'deps.js',
  '!' + PATHS.SRC.JS + 'externs/**/*.js'
];
