(function(window,angular){
    angular.module('cardFile.edit')
        .directive('tab',['cardEditOptions',function(cardEditOptions){
            return {
                restrict:'E',
                scope :{
                    title: '@'
                },
                require: '^tabgroup',
                transclude:true,
                link:function(scope,el,attrs,tabgroupCtrl){
                    tabgroupCtrl.addTab(scope);
                    var title = attrs.title.replace(/\s/,'');                   
                    scope.options= cardEditOptions.getEditOptions(title);
                },
                template:'<div ng-show="selected" ng-transclude></div>'
            }
        }]);
})(window,window.angular)