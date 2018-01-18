'use strict'

userApp.controller('EditUserCtrl', function ($scope, $routeParams, UsersService) {
  $scope.userLoaded = false;
  $scope.editionError = false;

  UsersService.getUser($routeParams['userId']).then(function (response) {
    $scope.user = response.data;
    $scope.userLoaded = true;
  });

  $scope.editUser = function (myUser) {
    $scope.editionSuccess = false;

    UsersService.editUser(myUser).then(function (response) {
      // $scope.newUser = {};

      // $scope.newUserId = response.data.id;
      $scope.editionSuccess = true;
    }, function (response) {
      $scope.editionError = true;
    });
  };
});
