(function(window,angular){
    angular.module('productsList',[])
        .factory('inventory',['$http','$q',function($http,$q){
            var api = {
                productinventory:null,
                productList:null,
                getData:getData,
                returnProductList:returnProductList,
                returnProductinventory:returnProductinventory,
                getProductList:getProductList
            }

            return api;

            function getData(res){
                return res.data;
            }

            function transformDataForSales(arr){
                api.productList = arr.map(function(ea){
                    return {
                        itemnumber: ea.itemnumber,
                        name: ea.name,
                        price: ea.price
                    }
                })
            }

            function returnProductList(){
                console.log(this);
                return this.productList ? this.productList : [];
            }

            function returnProductinventory(){
                return this.productinventory ? this.productinventory : [];
            }

            function getProductList(){
                var self = this;
                return this.productinventory ? $q.when(this.productinventory) : $http.get('src/mockData/products.json').then(function(res){

                    self.productinventory = getData(res);
                    transformDataForSales(self.productinventory);
                    return self.productList;
                })
            }
        }])
})(window,window.angular)