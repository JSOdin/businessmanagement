(function(window,angular){
    angular.module('salesInput')
            .filter('getTax',function(){
                return function(arr){
                    return arr.map(function(ea){
                        console.log(ea.tax);
                        return {
                            tax: parseFloat(ea.tax.percent),
                            itemTotal: ea.itemTotal
                        }
                    })
                }
            })
})(window,window.angular)