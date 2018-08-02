import gulp from 'gulp';
import browserSync, { create } from 'browser-sync';
 
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            port: '127.0.0.1'
        }
    });
});
