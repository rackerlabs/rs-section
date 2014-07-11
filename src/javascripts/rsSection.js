angular.module('rs.section').directive('rsSection', function () {
  'use strict';

  return {
    scope: {
      title: '@',
      description: '@'
    },
    restrict: 'EA',
    controller: 'SectionController',
    transclude: true,
    templateUrl: 'rsSection.html'
  };
});
