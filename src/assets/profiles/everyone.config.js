angular
  .module('faceplace')
  .config(function($routeProvider) {
    $routeProvider
      .when('/everyone', {
        templateUrl: 'assets/profiles/everyone.html',
        controller: 'EveryoneCtrl',
        controllerAs: 'everyone',
        private: true
      })
      .when('/everyone/:id', {
        templateUrl: 'assets/profiles/person.html',
        controller: 'PersonCtrl',
        controllerAs: 'person',
        private: true
      });
  });
