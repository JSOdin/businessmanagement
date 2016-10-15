(function(window,angular){
    angular.module('modal')         // modal instance specific to cardDetail
        .controller('departmentsModalInstanceController',['$uibModalInstance','currentCard','items','modalAPI',function($uibModalInstance,currentCard,items,modalAPI){
            var DMICtrl = this;
         
            DMICtrl.departments = items.data.departments; // this options list comes from:
            // tab directive scope (cardDetail's parent) ==> cardDetail scope ==> customLists.js
            
            // initially selected
            DMICtrl.searchTerm = items.selected.value;
            DMICtrl.match = {};
            DMICtrl.match[DMICtrl.searchTerm] = true;
        
            // takes in a search term and matches against department values. if match, highlight the table cell
            DMICtrl.highlightMatch = modalAPI.highlightMatch;

            DMICtrl.quickAdd = modalAPI.quickAdd;

            DMICtrl.pickDepartment = function(){
                $uibModalInstance.close(modalAPI.currentPick.pick);
            }

            DMICtrl.dismissModal = function(){
                $uibModalInstance.dismiss();
            }
        }])
})(window,window.angular)