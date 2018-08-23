var app = angular.module('DemoApp',[]);

    app.directive('ngCustom',function(){
        return {

            template: '&nbsp;&nbsp;Name <input type="text"><br><br>&nbsp;&nbsp;&nbsp;Age<input type="text">'
        };
    });
