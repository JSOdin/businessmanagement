(function(){
    angular.module('cardFile',['cardFile.edit'])
        .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
            $stateProvider.state('card',{
                url:'/card',
                templateUrl:'src/js/app/cardFile/cardFileTmp.html'
            });

            $urlRouterProvider.otherwise('/');
        }])
        .factory('currentCard',['getLists',function(getLists){
            return {
                card:null,
                modifyCard:function(){
                    
                }
            }
        }])
})()