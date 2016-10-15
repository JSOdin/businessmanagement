(function(window,angular){
    angular.module('contactsData',[])
        .factory('contactList',['$http','$q',function($http,$q){
            var contacts = {};

            var endpoint= {
                url:'src/mockData/contacts.json'
            };

            return {
                getContacts:getContacts
            }

            function getData(res){
                return res.data;
            }

            function getContacts(){
                return contacts.list ? $q.when(contacts.list) : $http.get(endpoint.url).then(function(res){
                    contacts.list = getData(res);
                    return contacts.list;
                })
            }
        }])
})(window,window.angular)