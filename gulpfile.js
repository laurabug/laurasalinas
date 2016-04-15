var gulp = require('gulp')
var through2 = require('through2')
var browserify = require('browserify')
var uglify = require('gulp-uglify')
var reactify = require('reactify')
var sass = require('gulp-sass');

gulp.task('styles', function() {
  return gulp.src('css/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build'));
});

gulp.task('scripts', function () {
  return gulp.src(['./js/**/*.js'])
    .pipe(through2.obj(function (file, enc, next){
      browserify(file.path)
        .transform(reactify)
        .bundle(function(err, res){
          file.contents = res;
          next(null, file);
        });
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./build'))
});

gulp.task('default', ['scripts', 'styles']);