angular
  .module('faceplace')
  .controller('UserProfileCtrl', function($rootScope, Person) {
    var vm = this;

    var id = $rootScope.auth.uid;
    Person.getOne(id, function(data) {
      vm.info = data;
    })
  })
