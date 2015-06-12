angular
  .module('faceplace')
  .factory('Person', function($http, API_URL, Auth) {
    var userInfo = Auth.userInfo;
    return {
      getOne: function(id, cb) {
        $http
          .get(`${API_URL}/profiles/${id}.json`)
          .success(cb)
      },
      getAll: function(cb) {
        $http
          .get(`${API_URL}/profiles.json`)
          .success(cb);
      },
      register: function(data, cb) {
        $http
          .put(`${API_URL}/profiles/${userInfo.uid}.json`, data)
          .success(cb);
      }
    };
  });
