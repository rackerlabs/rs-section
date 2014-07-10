angular.module('rs.section').directive('rsSection', function () {
  return {
    scope: {
      title: '@',
      description: '@'
    },
    restrict: 'E',
    controller: 'SectionController',
    transclude: true,
    template: '<div ng-class="{ \'rs-detail-section\': true, \'rs-collapsible-section\': collapsible, \'collapsed\': collapsed, \'expanded\': !collapsed }">\
      <div class="rs-detail-section-header" ng-click="toggle()">\
        <div class="rs-caret" ng-if="collapsible"></div>\
        <div class="rs-detail-section-title">{{ title }}</div>\
        <div class="rs-detail-section-subtitle">{{ description }}</div>\
      </div>\
      <div class="rs-detail-section-body" ng-transclude></div>\
    </div>'
  };
});
