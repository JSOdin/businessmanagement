(function(window,angular){
    angular.module('cardFile')
        .directive('cardswrapper',[function(){
            return {
                restrict:'E',
                transclude:true,
                templateUrl:'src/js/app/cardFile/cardwrapper.html',
                controller:'cardsController as cardsCtrl'
            }
        }])
})(window,window.angular)