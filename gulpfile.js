var gulp = require('gulp');
var getTask = require('./gulp/utils/get-task');

// Initialise gulp tasks.
gulp.task('clean', getTask('clean'));
gulp.task('closure-deps', getTask('closure-deps'));
gulp.task('compile-js', getTask('compile-js'));
gulp.task('lint-js', getTask('lint-js'));
gulp.task('lint-scss', getTask('lint-scss'));
gulp.task('preview', getTask('preview'));
gulp.task('sass', getTask('sass'));
gulp.task('symlink:dev', getTask('symlink').dev);
gulp.task('watch', getTask('watch'));

// Main tasks
gulp.task('build', getTask('build'));
gulp.task('default', getTask('default'));
