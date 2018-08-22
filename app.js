var app = angular.module('DemoApp',[]);

app.controller('DemoController',function($scope) {
		$scope.tutorialName = "Angular JS";

});

		app.directive('ngCustom',function(){
		return {
		 template: '<div>{{tutorialName}}</div>'
 }
});
