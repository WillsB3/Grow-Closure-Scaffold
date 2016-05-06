var gulp = require('gulp');

// Initialise gulp tasks.
gulp.task('clean', require('./gulp/tasks/clean'));
gulp.task('closure-deps', require('./gulp/tasks/closure-deps'));
gulp.task('compile-js', require('./gulp/tasks/compile-js'));
gulp.task('lint-js', require('./gulp/tasks/lint-js'));
gulp.task('lint-scss', require('./gulp/tasks/lint-scss'));
gulp.task('preview', require('./gulp/tasks/preview'));
gulp.task('sass', require('./gulp/tasks/sass'));
gulp.task('symlink:dev', require('./gulp/tasks/symlink').dev);
gulp.task('watch', require('./gulp/tasks/watch'));

// Main tasks
gulp.task('build', require('./gulp/tasks/build'));
gulp.task('default', require('./gulp/tasks/default'));
