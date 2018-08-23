var app = angular.module('DemoApp',[]);

app.controller('DemoController',function() {
		this.tutorialName = "Angular";

});

 app.directive('ngCustom',function(){
		return {
		 controller: 'DemoController',

			controllerAs: 'ctrl',

			template: '{{ctrl.tutorialName}}'
 };
});
