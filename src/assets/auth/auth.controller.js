angular
  .module('faceplace')
  .controller('LoginCtrl', function($scope, $location, Auth) {
    var vm = this;

    vm.login = function() {
      Auth.login(vm.email, vm.password, function() {
        $location.path('/everyone');
        $scope.$apply();
      });
    };

    vm.register = function() {
      Auth.register(vm.email, vm.password, function() {
        Auth.login(vm.email, vm.password, function() {
          $location.path('/user_setup');
          $scope.$apply();
        });
      });
    };
  });
