angular
  .module('faceplace')
  .factory('Person', function($http, API_URL) {
    return {
      getOne(id, cb) {
        $http
          .get(`${API_URL}/profiles/${id}.json`)
          .success(cb);
      },
      getAll: function(cb) {
        $http
          .get(`${API_URL}/profiles.json`)
          .success(cb);
      },
      register: function(data, cb) {
        $http
          .post(`${API_URL}/profile.json`, data)
          .success(cb);
      }
    };
  });
