var app = angular.module("DemoApp", []);
app.controller("DemoController", function($scope) {

  $scope.fullName=function(firstName,lastname){
  return firstName + lastname;
  }
} );
