angular
  .module('faceplace')
  .controller('UserSetupCtrl', function($scope, $location, $rootScope, Person, Auth) {
    var vm = this;

    vm.submitData = function() {
      vm.data.email = $rootScope.auth.password.email;
      vm.data.fullName = `${vm.data.firstName} ${vm.data.lastName}`;
      vm.data._id = $rootScope.auth.uid;
      Person.register(vm.data, $rootScope.auth.uid, function() {
        $location.path('/everyone');
      });
    };
  });
