/* global require */

var gulp = require('gulp');
var annotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var html2js = require('gulp-ng-html2js');
var rimraf = require('gulp-rimraf');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');

var karma = require('karma');
var karmaConfig = {
  browsers: ['PhantomJS'],
  frameworks: ['jasmine'],
  reporters: ['dots'],
  files: [
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'src/javascripts/**/*.js',
    'test/**/*.js'
  ]
};

gulp.task('clean', function () {
  'use strict';

  return gulp.src(['coverage/**/*', 'dist/**/*'])
    .pipe(rimraf());
});

gulp.task('build:concat', ['clean'], function () {
  'use strict';

  var javascripts = gulp.src('src/javascripts/**/*.js');
  var templates = gulp.src('src/templates/**/*.html')
    .pipe(html2js({ moduleName: 'rs.section' }));

  return merge(javascripts, templates)
    .pipe(sourcemaps.init())
      .pipe(annotate())
      .pipe(concat('rs-section.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build:min', ['clean'], function () {
  'use strict';

  var javascripts = gulp.src('src/javascripts/**/*.js');
  var templates = gulp.src('src/templates/**/*.html')
    .pipe(html2js({ moduleName: 'rs.section' }));

  return merge(javascripts, templates)
    .pipe(sourcemaps.init())
      .pipe(annotate())
      .pipe(concat('rs-section.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function () {
  'use strict';

  return gulp.src(['src/javascripts/**/*.js', 'test/**/*.js', 'Gulpfile.js', 'karma.conf.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', function (done) {
  'use strict';

  karmaConfig.singleRun = true;
  karmaConfig.reporters.push('coverage');
  karmaConfig.coverageReporter = { type: 'lcovonly', dir: 'coverage' };
  karmaConfig.preprocessors = { 'src/javascripts/**/*.js': ['coverage'] };

  karma.server.start(karmaConfig, done);
});

gulp.task('test:watch', function (done) {
  'use strict';

  karma.server.start(karmaConfig, done);
});

gulp.task('default', ['lint', 'test', 'build:concat', 'build:min']);
