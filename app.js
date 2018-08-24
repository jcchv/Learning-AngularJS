var app = angular.module('DemoApp',[]);

    app.directive('pane',function(){
        return {

            transclude:true,
            scope :{title:'@'},
            template: '<div style="border: 1px solid black;"> '+
                        '<ng-transclude></ng-transclude>'+
                            '</div>'
        };
    });
