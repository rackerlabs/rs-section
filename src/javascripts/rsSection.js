angular.module('rs.section').directive('rsSection', function () {
  'use strict';

  return {
    scope: {
      title: '@',
      description: '@',
      collapsible: '@'
    },
    restrict: 'EA',
    controller: 'SectionController',
    transclude: true,
    templateUrl: 'rsSection.html'
  };
});
