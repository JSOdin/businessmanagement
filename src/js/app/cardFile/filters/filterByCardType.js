(function(window,angular){
    angular.module('cardFile')
        .filter('filterByCardType',[function(){
            return function(arr,currentType){
                if (arr && currentType){
                    return arr.filter(function(ea){
                        return ea.cardType.display == currentType;
                    })
                } else {
                    return arr;
                }
            }
        }]);
})(window,window.angular)