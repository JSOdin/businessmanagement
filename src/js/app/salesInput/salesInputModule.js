var sales;

(function(){
    sales = angular.module('salesInput',['products','businessData'])
        .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
            $stateProvider.state('sale',{
               /* url:'sales',
                views:{
                  'sale@':{
                      templateUrl:'src/js/app/salesInput/salesInputTmp.html',
                      controller: 'salesInputController as SICtrl'
                  }
                }      */
                 url:'/sales',
                 templateUrl:'src/js/app/salesInput/salesInputTmp.html',
                 controller: 'salesInputController as SICtrl'
            });

            $urlRouterProvider.otherwise('/');
        }])          
     
})(window,window.angular);