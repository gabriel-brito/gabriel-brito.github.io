'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import runSequence from 'run-sequence';
import wrench from 'wrench';

wrench.readdirSyncRecursive('./gulp')
  .filter(file => {
    return (/\.(js)$/i).test(file);
  })
  .map(function (file) {
    require('./gulp/' + file)
});

gulp.task('build', ()=> {
  runSequence(
    'imagemin',
    'stylus',
    'scripts'
  )
});

gulp.task('default', () => {
  runSequence(
    'build',
    'watch',
    'browser-sync'
  )
})