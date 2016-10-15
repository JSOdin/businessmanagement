(function(window,angular){
    angular.module('modal')         // modal instance specific to cardDetail
        .controller('IdentifiersModalInstanceController',['$uibModalInstance','items','currentCard','$scope',function($uibModalInstance,items,currentCard,$scope){
            
            var IMICtrl = this;
            IMICtrl.paperFields = [];          
            IMICtrl.items = items.data[0];    // items :  resolved and injected via modal
            IMICtrl.checkboxmodels = {};

            // does the opposite of updateAbbvs, take a identifier abbv string and check off each box by assigning a model
            parseStrIntoModel(items.abbvs);          

            // cofnrim modal close
            IMICtrl.ok = function () {
                $uibModalInstance.close();
            };

            //confirm modal cancel
            IMICtrl.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

            // update the current card's identifier abbreviations string e.g. ABCDEFGH
            IMICtrl.updateAbbvs = function(map,key){
                var truthKeys = Object.keys(map).filter(function(ea){return map[ea]});

                if (truthKeys.length > 8){                            // dont allow more than 8 to be checked off
                    map[key] = false;                                 // nothing prevents checking off the 9th so we must reverse it
                    return alert('You are only allowed 8 identifiers per card.');
                }
                var str = '';
                for (var prop in map){
                    if (map[prop] && map.hasOwnProperty(prop)){
                        str+=prop;
                    }
                }
                currentCard.card.identifiers = str;
            }




            function parseStrIntoModel(str){
                var letters = str ? str.split('') : [];
                console.log(letters);
                for (var i=0; i<letters.length;i++){
                    IMICtrl.checkboxmodels[letters[i]] = true;
                }
            }
        }])
})(window,window.angular)