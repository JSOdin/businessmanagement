(function(window,angular){
    angular.module('cardEditOptions',[])       
        .factory('cardEditOptions',['getLists',function(getLists){
            var options = {};

            options.profile = {
                cardTypes :generateDisplayValue(["Customer","Vendor"]),
                designations : generateDisplayValue(["Company","Individual"]),
                currencies : null
            };
            
            options.carddetail = {
                departments:null,
                regions:null,
                sources:null,
                customLists:null
            };

            options.sellingdetail = {
                saleLayouts:null
            }

            getLists.getList('currencies').then(function(data){
                options.profile.currencies = generateCurrencyObjects(data);
            });

            getLists.getList('departments').then(function(data){
                options.carddetail.departments= data;
            });

            getLists.getList('regions').then(function(data){
                options.carddetail.regions= data;
            });

            getLists.getList('sources').then(function(data){
                options.carddetail.sources = data;
            });

            getLists.getList('customLists').then(function(data){
                options.carddetail.customLists = data;
            });

            getLists.getList('saleLayouts').then(function(data){
                options.sellingdetail.saleLayouts = data;
            });

            return {
                getEditOptions:function(tabName){
                    return tabName ? options[tabName.toLowerCase()] : options;
                }
            }

            // for fixed options only
            function generateDisplayValue(arr){
                return arr ? arr.map(function(ea){
                    return {
                        display: ea,
                        value: ea.toLowerCase()
                    }
                }):[];
            }

            function generateCurrencyObjects(arr){
                return arr ? arr.map(function(ea){
                    return {
                        value:ea[0],
                        label:ea[1],
                        rate:ea[2]
                    }
                }) : [];
            }

        }])

})(window,window.angular)