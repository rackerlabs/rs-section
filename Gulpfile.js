/* global require */

var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var rimraf = require('gulp-rimraf');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var karma = require('karma');
var karmaConfig = {
  browsers: ['PhantomJS'],
  frameworks: ['jasmine'],
  reporters: ['dots'],
  files: [
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'src/**/*.js',
    'test/**/*.js'
  ]
};

gulp.task('clean', function () {
  'use strict';

  return gulp.src('dist/**/*')
    .pipe(rimraf());
});

gulp.task('build:concat', ['clean'], function () {
  'use strict';

  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('rs-section.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build:min', ['clean'], function () {
  'use strict';

  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('rs-section.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function () {
  'use strict';

  return gulp.src(['src/**/*.js', 'test/**/*.js', 'Gulpfile.js', 'karma.conf.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', function (done) {
  'use strict';

  karmaConfig.singleRun = true;
  karma.server.start(karmaConfig, done);
});

gulp.task('test:watch', function (done) {
  'use strict';

  karma.server.start(karmaConfig, done);
});

gulp.task('default', ['lint', 'test', 'build:concat', 'build:min']);
