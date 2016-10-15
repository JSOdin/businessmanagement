(function(window,angular){
    angular.module('salesInput')
        .filter('getDecimal',function(){
            return function(input, isPercent){
                var res='';
                if (input){
                    res+=(+input).toFixed(2);
                    if (isPercent){
                        res+='%';
                    }
                    return res;
                }
            }
        });
})(window,window.angular)