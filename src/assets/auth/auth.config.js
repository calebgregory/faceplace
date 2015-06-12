angular
  .module('faceplace')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'assets/auth/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'auth',
        resolve: {
          checkLogin: function($rootScope, $location) {
            if($rootScope.auth) {
              $location.path('/everyone')
            }
          }
        }
      })
      .when('/logout', {
        template: '<p>Logging out . . .</p>',
        controller: 'LogoutCtrl'
      });
  });
