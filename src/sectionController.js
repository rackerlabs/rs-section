angular.module('rs.section').controller('SectionController', function ($scope, $element, $attrs) {
  $scope.collapsible = 'collapsible' in $attrs;
  $scope.collapsed = $attrs.collapsible === 'collapsed';

  $scope.toggle = function () {
    if ($scope.collapsible) {
      $scope.collapsed = !$scope.collapsed;
    }
  };
});
