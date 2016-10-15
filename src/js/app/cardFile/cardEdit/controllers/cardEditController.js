(function(window,angular){
    angular.module('cardFile.edit')        
        .controller('cardEditController',['currentCard','getLists',function(currentCard,getLists){

            var CECtrl = this;

            CECtrl.sampleEdit = function(){
                var index = getLists.getSingleItemIndex('contacts','cardID',currentCard.card.cardID);
                getLists.getListObj()['contacts'][index].name = 'hhehehehehehrereretetete'

            }

        }])
})(window,window.angular)