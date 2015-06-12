angular
  .module('faceplace')
  .controller('PersonCtrl', function($routeParams, Person) {
    var vm = this;
    vm.id = $routeParams.id;

    Person.getOne(vm.id, function(info) {
      vm.info = info;
    });

    vm.addFriend = function() {
      // Person.addFriend();
      console.log("add friend")
    }
  });
