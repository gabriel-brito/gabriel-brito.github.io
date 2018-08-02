import gulp from 'gulp';
import stylus from 'gulp-stylus';
import postcss from 'gulp-postcss';
import cleanCSS from 'gulp-clean-css';
import jeet from 'jeet';
import rupture from 'rupture';
import autoprefixer from 'autoprefixer-stylus';

gulp.task('stylus', ()=> {
  let options = {
    use: [jeet(), 
          rupture(),
          autoprefixer({
            browsers: [
              'last 2 version',
              '> 5%',
              'safari 5',
              'ios 6',
              'android 4'
            ]
          })
        ],
    'include css': true  
  }

  return gulp.src('./source/_styles/main.styl')
    .pipe(stylus(options))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/'));
});