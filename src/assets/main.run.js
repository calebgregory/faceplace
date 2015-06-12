angular
  .module('faceplace')
  .run(function($rootScope, Auth) {
    //$scope.$storage = $localStorage;
    $rootScope
      .$on('$routeChangeStart', function(event, nextRoute) {
        if(nextRoute.$$route && nextRoute.$$route.private) {
          Auth.requireLogin();
        }
      });
  });
