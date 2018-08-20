var app = angular.module("DemoApp", []);
app.controller("DemoController", function($scope) {

  $scope.TopicNames =[
		{name: "What controller do from Angular's perspective"},
		{name: "Controller Methods"},
		{name: "Building a basic controller"}];
});
