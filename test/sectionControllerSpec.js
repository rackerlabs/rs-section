describe('SectionController', function () {
  var scope, element, attributes, uuid, buildController;

  beforeEach(module('rs.section'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    element = angular.element();
    attributes = {};
    uuid = function () { return 'uuid' };

    buildController = function () {
      return $controller('SectionController', {
        $scope: scope,
        $element: element,
        $attrs: attributes,
        uuid: uuid
      });
    };
  }));

  describe('id', function () {
    it('is set to unique identifier', function () {
      buildController();

      expect(scope.id).toBe('uuid');
    });
  });

  describe('tabindex', function () {
    it('is set to -1 for non-collapsible section', function () {
      buildController();

      expect(scope.tabindex).toBe(-1);
    });

    it('is set to 0 for collapsible section', function () {
      attributes.collapsible = 'collapsible';
      buildController();

      expect(scope.tabindex).toBe(0);
    });
  });

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
    it('toggles section when section is clicked', function () {
      attributes.collapsible = 'collapsed';
      buildController();

      scope.toggle({ type: 'click' });
      expect(scope.collapsed).toBe(false);

      scope.toggle({ type: 'click' });
      expect(scope.collapsed).toBe(true);
    });

    it('toggles section when space bar is pressed', function () {
      attributes.collapsible = 'expanded';
      buildController();

      scope.toggle({ type: 'keypress', which: 32 });
      expect(scope.collapsed).toBe(true);

      scope.toggle({ type: 'keypress', which: 32 });
      expect(scope.collapsed).toBe(false);
    });

    it('does not toggle when other key is pressed', function () {
      attributes.collapsible = 'expanded';
      buildController();

      scope.toggle({ type: 'keypress', which: 33 });
      expect(scope.collapsed).toBe(false);
    });

    it('does not toggle when section is not collapsible', function () {
      buildController();
      scope.toggle({});

      expect(scope.collapsed).toBe(false);
    });
  });
});
