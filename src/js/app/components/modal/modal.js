(function(window,angular){
    angular.module('modal',['modalList'])
        .factory('modal',['$uibModal',function($uibModal){
            var map = {
                identifiers:{
                    templateUrl:'src/js/app/cardFile/cardEdit/tabs/cardDetail/directives/identifiers/identifiers.html',
                    controller:'IdentifiersModalInstanceController as IMICtrl'
                },
                regions:{
                    templateUrl:'src/js/app/cardFile/cardEdit/tabs/cardDetail/directives/regions/regions.html',
                    controller:'regionsModalInstanceController as RMICtrl'
                },
                sources:{
                    templateUrl:'src/js/app/cardFile/cardEdit/tabs/cardDetail/directives/sources/sources.html',
                    controller:'sourcesModalInstanceController as SMICtrl'
                },
                departments :{
                    templateUrl:'src/js/app/cardFile/cardEdit/tabs/cardDetail/directives/departments/departments.html',
                    controller:'departmentsModalInstanceController as DMICtrl'
                },
                customLists :{
                    templateUrl:'src/js/app/cardFile/cardEdit/tabs/cardDetail/directives/customList/customLists.html',
                    controller:'customListsModalInstanceController as CMICtrl'
                }
            }

            return {
                openModal : openModal
            }

            function openModal(size,data, modalType){          // made reusable by passing in size, the data you want to pass in, and modalType.
                return $uibModal.open({
                    animation: true,
                    templateUrl: map[modalType].templateUrl,
                    controller: map[modalType].controller,
                    size: size,
                    resolve: {
                        items: function(){
                            return data;
                        }
                    }
                }).result.then(function(selectedItem){
                    return selectedItem;
                })
            }
        }])
})(window,window.angular)