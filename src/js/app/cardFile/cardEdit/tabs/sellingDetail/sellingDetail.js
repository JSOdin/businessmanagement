(function(window,angular){
    angular.module('cardFile.edit')
        .directive('sellingDetail',[function(){
            return {
                restrict:'E',
                templateUrl:'src/js/app/cardFile/cardEdit/tabs/sellingDetail/sellingdetail.tmp.html',
                link:function(scope,el,attrs){                 
                    scope.options = scope.$parent.options;
                }
            }
        }])
})(window,window.angular)