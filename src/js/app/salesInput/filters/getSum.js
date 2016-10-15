(function(window,angular){
    angular.module('salesInput')
        .filter('getSum',function(){
            return function(arr,isTax){
                return arr.reduce(function(a,b){
                    if (isTax){
                        return a+b.itemTotal * (b.tax/100);
                    }
                    return  a+parseFloat((b.quantity * b.product.price * (1-b.discount/100 || 0))||0);
                },0);
            }
        })
})(window,window.angular)