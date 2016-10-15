(function(window,angular){
    angular.module('cardFile.edit')
        .directive('tabgroup',[function(){
            return {
                restrict:'E',
                transclude:true,
                template: '<div class="btn btn-default" ng-repeat="tab in TBCtrl.tabs" ng-click="TBCtrl.selectTab(tab)" ng-class="{active:tab.selected}">{{tab.title}}</div><div ng-transclude></div>',
                controller: 'tabgroupController as TBCtrl'
            }
        }])
})(window,window.angular)