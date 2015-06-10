angular
  .module('faceplace')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/static/landing.html'
      })

      .otherwise({
        templateUrl: 'assets/static/404.html'
      });
  });
