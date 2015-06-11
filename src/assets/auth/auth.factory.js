angular
  .module('faceplace')
  .factory('Auth', function($rootScope, $location, API_URL) {
    var fb = new Firebase(API_URL);

    return {
      login: function(email, password, cb) {
        fb.authWithPassword({
          email: email,
          password: password
        }, function(err, authData) {
          if(err) {
            console.log(err);
          } else {
            $rootScope.auth = authData;
            console.log(authData)
            cb();
          }
        });
      },
      register: function(email, password, cb) {
        fb.createUser({
          email: email,
          password: password
        }, function(err, authData) {
          if(err) {
            console.log(err)
          } else {
            $rootScope.auth = authData;
            cb();
          }
        })
      }
    }
  });
