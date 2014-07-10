/* global require */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
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
}

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

gulp.task('default', ['lint', 'test']);
