angular
  .module('faceplace')
  .factory('Auth', function($rootScope, $location, API_URL) {
    var fb = new Firebase(API_URL);

    return {
      login: function(email, password, cb) {

      }
    }
  });
