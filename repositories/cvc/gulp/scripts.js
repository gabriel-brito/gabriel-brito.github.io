import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import pump from 'pump';
import webpack from 'webpack-stream';

gulp.task('scripts', () => {
  return gulp.src('./source/_scripts/main.js')
    .pipe(webpack({
      output: {
        filename: 'main.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'es2015']
              }
            }
          }
        ]
      },
      devtool: '#inline-source-map'
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/'))
})
