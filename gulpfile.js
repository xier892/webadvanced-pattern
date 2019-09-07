const gulp = require('gulp');

const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');

const uglify = composer(uglifyes, console);
const postcss = require('gulp-postcss');
const cssvariables = require('postcss-css-variables');
const concatCss = require('gulp-concat-css');
const uglifycss = require('gulp-uglifycss');

gulp.task('js', function() {
  return gulp.src([
    'assets/js/*.js',
    'assets/js/*/*.js'])
    .pipe(concat('index.js'))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src([
    'assets/css/*/*.css'])
    .pipe(concatCss('main.css', {
      rebaseUrls: false
    }))
    .pipe(postcss([
      cssvariables()
    ]))
    .pipe(uglifycss({
      uglyComments: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('css', 'js'));
