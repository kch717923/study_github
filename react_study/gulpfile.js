// gulpfile.js
const gulp = require('gulp'),//걸프
sass = require('gulp-sass')(require('sass')),//sass모듈
concat = require('gulp-concat'),//파일합치기
cleancss = require('gulp-clean-css')//압축

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundle.css'))
    .pipe(cleancss({format:'keep-breaks'}))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/*.scss', gulp.series('sass'));
});

gulp.task('w',gulp.series('sass:watch'));
gulp.task('default',gulp.series('sass'));