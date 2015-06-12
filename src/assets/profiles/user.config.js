angular
  .module('faceplace')
  .config(function($routeProvider) {
    $routeProvider
      .when('/user_setup', {
        templateUrl: 'assets/profiles/user_setup.html',
        controller: 'UserSetupCtrl',
        controllerAs: 'user',
        private: true
      })
      .when('/profile', {
        templateUrl: 'assets/profiles/user_profile.html',
        controller: 'UserProfileCtrl',
        controllerAs: 'profile',
        private: true
      })
      .when('/friends', {
        templateUrl: 'assets/profiles/friends.html',
        controller: 'FriendsCtrl',
        controllerAs: 'friends',
        private: true
      });
  });
