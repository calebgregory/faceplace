angular
  .module('faceplace')
  .config(function($routeProvider) {
    $routeProvider
      .when('/everyone', {
        templateUrl: 'assets/profiles/everyone.html',
        controller: 'EveryoneCtrl',
        controllerAs: 'everyone'
      })
  })
