var app = angular.module('DemoApp',[]);
    app.filter('Demofilter',function(){
        return function(input)
        {
            return input + " Tutorial"
        }
    });

    app.controller('DemoController',function($scope){

        $scope.tutorial ="Angular";
     });
