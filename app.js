var app = angular.module('sampleApp',["ngRoute"]);
    app.config(function($routeProvider){
        $routeProvider.
        when("/NewEvent",{
            templateUrl : "add_event.html",
            controller: "AddEventController"
        }).
        when("/DisplayEvent", {
            templateUrl: "show_event.html",
            controller: "ShowDisplayController"
        }).
        otherwise ({
            redirectTo: '/DisplayEvent'
        });
    });
    app.controller("AddEventController", function($scope) {

        $scope.message = "This is to Add a new Event";

    });
    app.controller("ShowDisplayController",function($scope){

        $scope.message = "This is display an Event";

    });

		app.controller('AngularController',function($scope){
        $scope.a=1;
        $scope.b=1;

        $scope.value=$scope.$eval('a+b');
    });
