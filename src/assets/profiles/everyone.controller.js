angular
  .module('faceplace')
  .controller('EveryoneCtrl', function($scope, $location, Person){
    var vm = this;

    Person.getAll(function(everyone) {
      vm.everyone = everyone;
      console.log(vm.everyone);
    });
  });
