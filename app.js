var app = angular.module('DemoApp',[]);

    app.directive('outer',function(){
        return {

            restrict:'E',
            template: '<div><h1>Outer</h1><inner></inner></div>',
        }});

    app.directive('inner',function(){
        return {

            restrict:'E',
            template: '<div><h1>Inner</h1></div>',
        }
    });
