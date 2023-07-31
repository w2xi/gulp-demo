const { src, dest, parallel } = require('gulp')

const sass = require('gulp-sass')(require('sass'))
const bable = require('gulp-babel')
const imagemin = require('gulp-imagemin')

const style = () => {
  return src('src/assets/styles/*.scss', { base: 'src' })
    .pipe(sass())
    .pipe(dest('dist'))
}

const script = () => {
  return src('src/assets/scripts/*.js', { base: 'src' })
    .pipe(bable({ presets: ['@babel/preset-env'] }))
    .pipe(dest('dist'))
}

// gulp-image 依赖安装失败
const image = () => {
  return src('src/assets/images/**', { base: 'src' })
    .pipe(imagemin())
    .pipe(dest('dist'))
}

const font = () => {
  return src('src/assets/font/**', { base: 'src' })
    .pipe(imagemin())
    .pipe(dest('dist'))
}

const compile = parallel(style, script)

module.exports = {
  compile,
}