(function(window,angular){
    angular.module('cardFile.edit')
        .directive('history',[function(){
            return {
                restrict:'E',
                templateUrl:'src/js/app/cardFile/cardEdit/tabs/history/history.tmp.html'
            }
        }])
})(window,window.angular)