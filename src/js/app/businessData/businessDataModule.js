(function(window,angular){
    angular.module('businessData',['salesData','contactsData',])
        .factory('getLists',['$http','$q',function($http,$q){
            var list={}
            var map = {
                contacts:'src/mockData/contacts.json',
                accounts:'src/mockData/accounts.json',
                jobs:'src/mockData/jobs.json',
                departments:'src/mockData/departments.json',
                taxes:'src/mockData/taxes.json',
                shippings:'src/mockData/shippings.json',
                identifiers:'src/mockData/identifiers.json',
                currencies:'src/mockData/currencies.json',
                regions:'src/mockData/regions.json',
                sources:'src/mockData/sources.json',
                customLists:'src/mockData/customLists.json',
                saleLayouts:'src/mockData/saleLayouts.json'
            };

            var optionLists =  {
                formTypes:["QUOTE","PROGRESSIVE BILLING QUOTE","ORDER","INVOICE","CREDIT MEMO"],
                terms:["COD","Prepaid","30 days","90 days","6 months"]
            };

            return {
                getOptionList:getOptionList,
                getList:getList,
                getListObj: getListObj,
                getSingleItemIndex: getSingleItemIndex
            };

            function getOptionList(type){
                return optionLists[type];
            }

            function getData(res){
                return res.data;
            }

            function getList(type){
                return list[type] ? $q.when(list[type]) : $http.get(map[type],{transformResponse:transformer}).then(function(res){
                    list[type] = getData(res);
                    return list[type];
                })
            }

            function getListObj(){
                return Object.keys(list||{}).length > 0 ? list: {};
            }

            // get the index of item in a list
            function getSingleItemIndex(listType, identifier,value){
                var index;

                list[listType].some(function(item,i){
                    if (item[identifier] == value){
                        index = i;
                        return true;
                    }
                });

                return index;
            }

            function transformer(res){
                res = JSON.parse(res);
                return res
            }
        }])
})(window,window.angular)