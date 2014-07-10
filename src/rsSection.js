angular.module('rs.section').directive('rsSection', function () {
  return {
    scope: {
      title: '@',
      description: '@'
    },
    restrict: 'E',
    controller: 'SectionController',
    transclude: true,
    template: '<div class="rs-detail-section">\
      <div class="rs-detail-section-header">\
        <div class="rs-detail-section-title">{{ title }}</div>\
        <div class="rs-detail-section-subtitle">{{ description }}</div>\
      </div>\
      <div class="rs-detail-section-body" ng-transclude></div>\
    </div>'
  };
});
