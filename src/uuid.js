angular.module('rs.section').factory('uuid', function () {
  var idCounter = 0;

  return function () {
    idCounter += 1;
    return 'rs.section:' + idCounter.toString(36);
  };
});
