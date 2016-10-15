(function(window,angular){
    angular.module('modal')         // modal instance specific to cardDetail
        .controller('sourcesModalInstanceController',['$uibModalInstance','currentCard','items','modalAPI',function($uibModalInstance,currentCard,items,modalAPI){
            var SMICtrl = this;        

            SMICtrl.sources =  items.data.sources; // this options list comes from:
            // tab directive scope (cardDetail's parent) ==> cardDetail scope ==> customLists.js

            //initially selected
            SMICtrl.searchTerm = items.selected.value;
            SMICtrl.match = {};
            SMICtrl.match[SMICtrl.searchTerm] = true;

            // takes in a search term and matches against region values. if match, highlight the table cell
            SMICtrl.highlightMatch = modalAPI.highlightMatch;

            SMICtrl.quickAdd = modalAPI.quickAdd;

            SMICtrl.pickRegion = function(){
                $uibModalInstance.close(modalAPI.currentPick.pick);
            }

            SMICtrl.dismissModal = function(){
                $uibModalInstance.dismiss();
            }
        }])
})(window,window.angular)