import gulp from 'gulp';
import watch from 'gulp-watch';

gulp.task('watch', () => {
  return gulp.watch(
    ['./source/**/**/*.styl', './source/**/**/*.js'],
    ['build']
  )
});