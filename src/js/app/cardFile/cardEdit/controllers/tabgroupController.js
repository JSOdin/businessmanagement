(function(window,angular){
    angular.module('cardFile.edit')
        .controller('tabgroupController',['currentCard',function(currentCard){

            var TBCtrl = this;
            TBCtrl.tabs = [];

            // the card we're editing
            TBCtrl.currentCard = currentCard.card;          
            TBCtrl.addTab = function(tab){
                if (!TBCtrl.tabs.length){
                    tab.selected = true;
                }
                TBCtrl.tabs.push(tab);
            }

            TBCtrl.selectTab = function(tab){
                angular.forEach(TBCtrl.tabs,function(ea){
                    ea.selected = angular.equals(ea, tab);
                })
            };
        }])
})(window,window.angular)