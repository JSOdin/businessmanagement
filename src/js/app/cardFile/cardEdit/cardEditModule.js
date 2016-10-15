(function(window,angular){
    angular.module('cardFile.edit',['cardEditOptions'])
        .config(['$stateProvider',function($stateProvider){
            $stateProvider.state('edit',{
                url:'/card/edit',
                templateUrl:'src/js/app/cardFile/cardEdit/cardEditTmp.html',
                controller: 'cardEditController as CECtrl'
            })
        }])         
        
})(window,window.angular)