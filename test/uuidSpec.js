describe('uuid', function () {
  'use strict';

  beforeEach(module('rs.section'));

  it('generates sequential Base 36 identifiers', inject(function (uuid) {
    for (var i = 1; i <= 36; i += 1) {
      expect(uuid()).toBe('rs.section:' + i.toString(36));
    }
  }));
});
