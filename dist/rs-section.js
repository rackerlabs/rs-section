angular.module('rs.section', []).run(function () {
  'use strict';

  var styleContent, styleTag;

  styleContent = document.createTextNode('rs-section { display: block; } \
    rs-section + rs-section { border-top: 1px solid #eee; } \
    .rs-detail-section-header { outline: none; }');
  styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(styleContent);

  document.head.appendChild(styleTag);
});

(function(module) {
try {
  module = angular.module('rs.section');
} catch (e) {
  module = angular.module('rs.section', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('rsSection.html',
    '<div ng-class="{ \'rs-detail-section\': true, \'rs-collapsible-section\': collapsible, \'collapsed\': collapsed, \'loading\': loading, \'expanded\': !collapsed && !loading }">\n' +
    '  <div class="rs-detail-section-header" ng-click="toggle($event)" ng-keypress="toggle($event)" tabindex="{{ tabindex }}" aria-controls="{{ id }}">\n' +
    '    <div class="rs-caret" ng-if="collapsible"></div>\n' +
    '    <div class="rs-detail-section-title">{{ title }}</div>\n' +
    '    <div class="rs-detail-section-subtitle">{{ description }}</div>\n' +
    '  </div>\n' +
    '  <div class="rs-detail-section-body" id="{{ id }}" role="region" aria-expanded="{{ !collapsed }}" ng-transclude></div>\n' +
    '</div>\n' +
    '');
}]);
})();

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

angular.module('rs.section').controller('SectionController', ["$scope", "uuid", function ($scope, uuid) {
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
}]);

angular.module('rs.section').factory('uuid', function () {
  'use strict';

  var idCounter = 0;

  return function () {
    idCounter += 1;
    return 'rs.section:' + idCounter.toString(36);
  };
});

//# sourceMappingURL=rs-section.js.map