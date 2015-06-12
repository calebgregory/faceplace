angular
  .module('faceplace')
  .controller('UserSetupCtrl', function($scope, $location, Person) {
    var vm = this;

    vm.submitData = function() {
      Person.register(vm.data, function() {
        $location.path('/everyone');
      });
    };
  });
