angular.module('rs.section').controller('SectionController', function ($scope, $element, $attrs, uuid) {
  $scope.collapsible = 'collapsible' in $attrs;
  $scope.collapsed = $attrs.collapsible === 'collapsed';
  $scope.tabindex = $scope.collapsible ? 0 : -1;
  $scope.id = uuid();

  $scope.toggle = function (e) {
    if (e.type === 'keypress' && e.which != 32) {
      return;
    }

    if ($scope.collapsible) {
      $scope.collapsed = !$scope.collapsed;
    }
  };
});
