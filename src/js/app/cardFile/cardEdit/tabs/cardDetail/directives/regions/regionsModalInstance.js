(function(window,angular){
    angular.module('modal')         // modal instance specific to cardDetail
        .controller('regionsModalInstanceController',['$uibModalInstance','currentCard','items','modalAPI',function($uibModalInstance,currentCard,items,modalAPI){
            var RMICtrl = this;

            RMICtrl.regions = items.data.regions; // this options list comes from:
            // tab directive scope (cardDetail's parent) ==> cardDetail scope ==> customLists.js

            //initially selected
            RMICtrl.searchTerm = items.selected.value;
            RMICtrl.match = {};
            RMICtrl.match[RMICtrl.searchTerm] = true;

            // takes in a search term and matches against region values. if match, highlight the table cell
            RMICtrl.highlightMatch = modalAPI.highlightMatch;

            RMICtrl.quickAdd = modalAPI.quickAdd;

            RMICtrl.pickRegion = function(){
                $uibModalInstance.close(modalAPI.currentPick.pick);
            }

            RMICtrl.dismissModal = function(){
                $uibModalInstance.dismiss();
            }
        }])
})(window,window.angular)