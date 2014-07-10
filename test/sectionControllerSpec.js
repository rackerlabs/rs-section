describe('SectionController', function () {
  var scope, element, attributes, buildController;

  beforeEach(module('rs.section'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    element = angular.element();
    attributes = {};

    buildController = function () {
      return $controller('SectionController', {
        $scope: scope,
        $element: element,
        $attrs: attributes
      });
    };
  }));

  describe('collapsible', function () {
    it('is false when collapsible attribute is not provided', function () {
      buildController();

      expect(scope.collapsible).toBe(false);
    });

    it('is true when collapsible attribute is provided', function () {
      attributes.collapsible = 'expanded';
      buildController();

      expect(scope.collapsible).toBe(true);
    });
  });

  describe('collapsed', function () {
    it('is false for non-collapsible section', function () {
      buildController();

      expect(scope.collapsed).toBe(false);
    });

    it('is false for collapsible section with no state parameter', function () {
      attributes.collapsible = null;
      buildController();

      expect(scope.collapsed).toBe(false);
    });

    it('is false for collapsible section with EXPANDED state parameter', function () {
      attributes.collapsible = 'expanded';
      buildController();

      expect(scope.collapsed).toBe(false);
    });

    it('is true for collapsible section with COLLAPSED state parameter', function () {
      attributes.collapsible = 'collapsed';
      buildController();

      expect(scope.collapsed).toBe(true);
    });
  });

  describe('toggle', function () {
    it('changes nothing when section is not collapsible', function () {
      buildController();
      scope.toggle();

      expect(scope.collapsed).toBe(false);
    });

    it('toggles section state when section is collapsible', function () {
      attributes.collapsible = 'collapsed';
      buildController();

      scope.toggle();
      expect(scope.collapsed).toBe(false);

      scope.toggle();
      expect(scope.collapsed).toBe(true);
    });
  });
});
