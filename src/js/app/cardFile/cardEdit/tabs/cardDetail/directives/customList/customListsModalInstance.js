(function(window,angular){
    angular.module('modal')         // modal instance specific to cardDetail
        .controller('customListsModalInstanceController',['$uibModalInstance','currentCard','items','modalAPI',function($uibModalInstance,currentCard,items,modalAPI){
            var CMICtrl = this;      

            CMICtrl.customLists = items.data.customLists;       // this options list comes from:
                                                                // tab directive scope (cardDetail's parent) ==> cardDetail scope ==> customLists.js

            // initially selected
            CMICtrl.searchTerm = items.selected.value;
            CMICtrl.match = {};
            CMICtrl.match[CMICtrl.searchTerm] = true;

            // takes in a search term and matches against customList values. if match, highlight the table cell
            CMICtrl.highlightMatch = modalAPI.highlightMatch;

            CMICtrl.quickAdd = modalAPI.quickAdd;

            CMICtrl.pickCustomList = function(){
                $uibModalInstance.close(modalAPI.currentPick.pick);
            }

            CMICtrl.dismissModal = function(){
                $uibModalInstance.dismiss();
            }
        }])
})(window,window.angular)