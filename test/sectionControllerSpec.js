describe('SectionController', function () {
  'use strict';

  var scope, uuid, buildController;

  beforeEach(module('rs.section'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    uuid = function () { return 'uuid'; };

    buildController = function () {
      return $controller('SectionController', {
        $scope: scope,
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
      scope.$digest();

      expect(scope.tabindex).toBe(-1);
    });

    it('is set to -1 for loading section', function () {
      scope.collapsible = 'loading';
      buildController();
      scope.$digest();

      expect(scope.tabindex).toBe(-1);
    });

    it('is set to 0 for collapsible section', function () {
      scope.collapsible = 'collapsed';
      buildController();
      scope.$digest();

      expect(scope.tabindex).toBe(0);
    });
  });

  describe('collapsible', function () {
    it('is undefined when collapsible attribute is not provided', function () {
      buildController();
      scope.$digest();

      expect(scope.collapsible).toBe(undefined);
      expect(scope.collapsed).toBe(false);
    });

    it('is true when collapsible attribute is provided', function () {
      scope.collapsible = 'expanded';
      buildController();
      scope.$digest();

      expect(scope.collapsed).toBe(false);
    });
  });

  describe('collapsed', function () {
    it('is false for non-collapsible section', function () {
      scope.collapsible = 'loading';
      buildController();
      scope.$digest();

      expect(scope.collapsed).toBe(false);
    });

    it('is false for collapsible section with no state parameter', function () {
      scope.collapsible = null;
      buildController();
      scope.$digest();

      expect(scope.collapsed).toBe(false);
    });

    it('is false for collapsible section with EXPANDED state parameter', function () {
      scope.collapsible = 'expanded';
      buildController();
      scope.$digest();

      expect(scope.collapsed).toBe(false);
    });

    it('is true for collapsible section with COLLAPSED state parameter', function () {
      scope.collapsible = 'collapsed';
      buildController();
      scope.$digest();

      expect(scope.collapsed).toBe(true);
    });
  });

  describe('toggle', function () {
    it('toggles section when section is clicked', function () {
      scope.collapsible = 'collapsed';
      buildController();
      scope.$digest();

      scope.toggle({ type: 'click' });
      expect(scope.collapsed).toBe(false);

      scope.toggle({ type: 'click' });
      expect(scope.collapsed).toBe(true);
    });

    it('toggles section when space bar is pressed', function () {
      scope.collapsible = 'expanded';
      buildController();
      scope.$digest();

      scope.toggle({ type: 'keypress', which: 32 });
      expect(scope.collapsed).toBe(true);

      scope.toggle({ type: 'keypress', which: 32 });
      expect(scope.collapsed).toBe(false);
    });

    it('does not toggle when other key is pressed', function () {
      scope.collapsible = 'expanded';
      buildController();
      scope.$digest();

      scope.toggle({ type: 'keypress', which: 33 });
      expect(scope.collapsed).toBe(false);
    });

    it('does not toggle when section is not collapsible', function () {
      buildController();
      scope.$digest();
      scope.toggle({});

      expect(scope.collapsed).toBe(false);
    });

    it('does not toggle when section is loading', function () {
      scope.collapsible = 'loading';
      buildController();
      scope.$digest();
      scope.toggle({});

      expect(scope.collapsed).toBe(false);
    });
  });
});
