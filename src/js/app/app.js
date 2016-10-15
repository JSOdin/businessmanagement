var app;
(function(window,angular){
    app=angular.module('business',['ui.router','ui.bootstrap','modal','salesInput','cardFile'])
        .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
            $stateProvider.state('main',{
                url:'/',
                templateUrl: 'src/js/app/app.tmp.html'
            });

            $urlRouterProvider.otherwise('/');
        }])
})(window,window.angular)