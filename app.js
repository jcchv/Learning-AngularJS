var app = angular.module('DemoApp',[]);

    app.directive('ngEvent',function(){
        return {

            link:function($scope,element,attrs) {
                element.bind('click',function () {
                    element.html('You clicked me'+Math.random());
                });}
        }});
