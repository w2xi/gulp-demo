const gulp = require('gulp')
// const sass = require('gulp-sass')
const sass = require('gulp-sass')(require('sass'))
const cssmin = require('gulp-cssmin')

function compile() {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest('css'))
}

exports.build = compile