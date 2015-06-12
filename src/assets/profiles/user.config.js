angular
  .module('faceplace')
  .config(function($routeProvider) {
    $routeProvider
      .when('/user_setup', {
        templateUrl: 'assets/profiles/user_setup.html',
        controller: 'UserSetupCtrl',
        controllerAs: 'user'
      })
      .when('/profile', {
        templateUrl: 'assets/profiles/user_profile.html',
        controller: 'UserProfileCtrl',
        controllerAs: 'profile'
      });
  });
