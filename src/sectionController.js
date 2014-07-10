angular.module('rs.section').controller('SectionController', function ($scope, $element, $attrs, uuid) {
  'use strict';

  $scope.collapsible = 'collapsible' in $attrs;
  $scope.collapsed = $attrs.collapsible === 'collapsed';
  $scope.loading = $attrs.collapsible === 'loading';

  if ($scope.collapsible && !$scope.loading) {
    $scope.tabindex = 0;
  } else {
    $scope.tabindex = -1;
  }

  $scope.id = uuid();

  $scope.toggle = function (e) {
    if (e.type === 'keypress' && e.which !== 32) {
      return;
    }

    if ($scope.collapsible) {
      $scope.collapsed = !$scope.collapsed;
    }
  };
});
