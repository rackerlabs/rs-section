angular.module('rs.section').controller('SectionController', function ($scope, uuid) {
  'use strict';

  $scope.collapsed = false;
  $scope.tabindex = -1;
  $scope.id = uuid();
  $scope.toggle = function (e) {
    if (e.type === 'keypress' && e.which !== 32) {
      return;
    }

    if ($scope.collapsible && $scope.collapsible !== 'loading') {
      $scope.collapsed = !$scope.collapsed;
    }
  };

  $scope.$watch('collapsible', function () {
    $scope.collapsed = $scope.collapsible === 'collapsed';
    $scope.loading = $scope.collapsible === 'loading';

    if ($scope.collapsible && !$scope.loading) {
      $scope.tabindex = 0;
    } else {
      $scope.tabindex = -1;
    }
  });
});
