(function(window,angular){
    angular.module('cardFile.edit')
        .directive('profile',['cardEditOptions',function(cardEditOptions){
            return {
                restrict: 'E',
                templateUrl: 'src/js/app/cardFile/cardEdit/tabs/profile/profile.tmp.html',
                link:function(scope,el,attrs){
                     scope.options = scope.$parent.options;
                   /* scope.options = cardEditOptions.getEditOptions('profile');*/
                }
            }
        }])
})(window,window.angular)