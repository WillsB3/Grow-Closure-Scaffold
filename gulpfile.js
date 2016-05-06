var gulp = require('gulp');

// Initialise gulp tasks.
gulp.task('clean', require('./gulp/tasks/clean')(gulp));
gulp.task('closure-deps', require('./gulp/tasks/closure-deps')(gulp));
gulp.task('compile-js', require('./gulp/tasks/compile-js')(gulp));
gulp.task('lint-js', require('./gulp/tasks/lint-js')(gulp));
gulp.task('lint-scss', require('./gulp/tasks/lint-scss')(gulp));
gulp.task('preview', require('./gulp/tasks/preview')(gulp));
gulp.task('sass', require('./gulp/tasks/sass')(gulp));
gulp.task('symlink:dev', require('./gulp/tasks/symlink')(gulp).dev);
gulp.task('watch', require('./gulp/tasks/watch')(gulp));

// Main tasks
gulp.task('build', require('./gulp/tasks/build')(gulp));
gulp.task('default', require('./gulp/tasks/default')(gulp));
