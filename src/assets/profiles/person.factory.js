angular
  .module('faceplace')
  .factory('Person', function($http, API_URL) {
    return {
      addFriend: function(id, friend, cb) {
        $http
          .put(`${API_URL}/friendships/${id}.json`, friend)
          .success(cb);
      },
      getFriends: function(id, cb) {
        $http
          .get(`${API_URL}/friendships/${id}.json`)
          .success(cb)
          .error(function(data, error) { console.log(error); });
      },
      getOne: function(id, cb) {
        $http
          .get(`${API_URL}/profiles/${id}.json`)
          .success(cb);
      },
      getAll: function(cb) {
        $http
          .get(`${API_URL}/profiles.json`)
          .success(cb);
      },
      register: function(data, id, cb) {
        $http
          .put(`${API_URL}/profiles/${id}.json`, data)
          .success(cb);
      }
    };
  });
