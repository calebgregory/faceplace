angular
  .module('faceplace')
  .factory('Person', function($http, API_URL) {
    return {
      getAll: function(cb) {
        $http
          .get(`${API_URL}/profiles.json`)
          .success(cb);
      }
    };
  });
