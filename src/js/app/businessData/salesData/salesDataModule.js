(function(window,angular){
    angular.module('salesData',[])
        .factory('salesData',['$http','$q',function($http,$q){
            var api = {
                currentInvoiceNum:'',
                getCurrentInvoiceNum: getCurrentInvoiceNum
            };

            return api;

            function getCurrentInvoiceNum(){
                var self = this;
                return self.currentInvoiceNum ? $q.when(self.currentInvoiceNum) : $http.get('src/mockData/invoiceNum.json').then(function(res){
                    self.currentInvoiceNum = res.data;
                    return self.currentInvoiceNum;
                })
            }
        }])
})(window,window.angular)