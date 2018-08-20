var app = angular.module('DemoApp', []);
app.controller('DemoCtrl', function($scope) {
  $scope.pname = "Juan";

  $scope.Topic = {
    Controller: true,
    Models: false
  };
});
