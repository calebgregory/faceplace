angular
  .module('faceplace')
  .controller('LoginCtrl', function($scope, $location, Auth) {
    var vm = this;
    console.log("I exist");

    vm.login = function() {
      Auth.login(vm.email, vm.password, function($location) {
        console.log("Logging in")
      })
    }
  });
