var app = angular.module('DemoApp', []);
app.controller('firstcontroller', function($scope) {
  $scope.pname = "firstcontroller";
});
app.controller('secondcontroller', function($scope) {
  $scope.lname = "secondcontroller";
});
