import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task('imagemin', ()=>{
  return gulp.src('./source/_images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images/'))
});