angular
  .module('faceplace')
  .run(function($rootScope, $location, API_URL) {
    $rootScope
      .$on('$routeChangeStart', function(event, nextRoute) {
        if(nextRoute.$$route && nextRoute.$$route.private) {
          Auth.requireLogin();
        }
      });
  });
