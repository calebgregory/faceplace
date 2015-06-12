angular
  .module('faceplace')
  .controller('PersonCtrl', function($routeParams, $location, $rootScope, Person) {
    var vm = this;
    vm.id = $routeParams.id;

    Person.getOne(vm.id, function(info) {
      vm.info = info;
    });

    vm.addFriend = function() {
      var userId = $rootScope.auth.uid.replace(':', '%3A');
      var friends = [].concat(vm.info.uid);
      Person.getFriends(userId, function(data) {
        var friendData = data ? data : [];
        var newFriends = friends.concat(friendData);
        Person.addFriend(userId, newFriends, function() {
          $location.path('/friends');
        });
      });
    };
  });
