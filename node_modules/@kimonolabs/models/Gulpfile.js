'use strict';

var jshint = require('gulp-jshint'),
    gulp = require('gulp'),
    stylish = require('jshint-stylish');

gulp.task('lint', function() {
  return gulp.src(['./**/*.js', '!./node_modules/**'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});