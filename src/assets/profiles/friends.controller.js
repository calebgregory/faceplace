angular
  .module('faceplace')
  .controller('FriendsCtrl', function($rootScope, Person) {
    var vm = this;

    vm.list = {}
    var id = $rootScope.auth.uid;
    Person.getFriends(id, function(friendIds) {
      if (friendIds) {
        friendIds.forEach(function(friendId) {
          Person.getOne(friendId, function(data) {
            vm.list[friendId] = data;
          });
        });
      }
    });
    console.log(vm.list);
  });
