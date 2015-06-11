angular
  .module('faceplace')
  .controller('EveryoneCtrl', function($scope, $location, Person, Auth){
    var vm = this;

    Person.getAll(function(everyone) {
      vm.everyone = everyone;
    });
  });
