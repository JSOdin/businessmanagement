(function(window,angular){
    angular.module('cardFile.edit')
        .directive('cardDetail',[function(){
            return {
                restrict:'E',
                templateUrl:'src/js/app/cardFile/cardEdit/tabs/cardDetail/carddetail.tmp.html',
                controller:'cardDetailController as CDCtrl'
            }
        }])
        .controller('cardDetailController',['currentCard','getLists','cardEditOptions','$scope',function(currentCard,getLists,cardEditOptions,$scope){
            var CDCtrl = this;
            
            CDCtrl.options = $scope.$parent.options;

            CDCtrl.currentCard = currentCard.card;
            getLists.getList('identifiers').then(function(data){          
                CDCtrl.identifiers = data;
            })
        }])
})(window,window.angular)