var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var concat = require('gulp-concat');
var minifyjs = require('gulp-js-minify');
var cleanCSS = require('gulp-clean-css');
var path = require('path');

// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
      // proxy: 'http://mmaza.darwoft.com/projects/ect'
      server: './',
      browser: ['firefox', 'chrome']
    });

    gulp.watch('code/*.scss', ['code']);
    gulp.watch('design/*.scss', ['design']);
    gulp.watch('*.scss', ['general']);
    gulp.watch([
      'code/*.html',
      'code/*.js',
      'design/*.html',
      'design/*.js',
      '*.html',
      '*.js'
    ]).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('code', function() {
    return gulp.src('code/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('code/'))
    .pipe(browserSync.stream());
});
gulp.task('design', function() {
    return gulp.src('design/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('design/'))
    .pipe(browserSync.stream());
});
gulp.task('general', function() {
    return gulp.src('*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
