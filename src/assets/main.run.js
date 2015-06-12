angular
  .module('faceplace')
  .run(function($rootScope, $location, Auth) {
    $rootScope
      .$on('$routeChangeStart', function(event, nextRoute) {
        if(nextRoute.$$route && nextRoute.$$route.private) {
          //$scope.$storage = $localStorage;
          Auth.requireLogin();
        }
      });
  });
