(function(window,angular){
    angular.module('cardFile.edit')
        .directive('selectLocation',[function(){
            return {
                restrict:'A',
                require:'tabgroup',
                link:function(scope,el,attrs,TBCtrl){
                    var index;
                    TBCtrl.currentLocation = TBCtrl.currentCard.locations[0];
                    // TODO find out how to edit card file address IN PLACE so globally affected.. JSON data has an extra "address" field that SICtrl reads from. delete them.
                    el.bind('click',function(){
                        linkCurrentLocation();
                        scope.$parent.$apply();                                     // must call parent.$apply because we want to rerender the parent DOM elements (outside of tabgroup. scope.$apply() only reaches the tabs
                    })

                    function linkCurrentLocation(){

                        TBCtrl.tabs.some(function(ea,i){                            // some hacky wadoodle to get the selected address tab's data
                            if (ea.selected){                                        // get index of tab within address tabs, which matches the locations array index
                                index = i;
                                return true;
                            }
                        });
                        TBCtrl.currentLocation = TBCtrl.currentCard.locations[index];

                    }
                }
            }
        }])
})(window,window.angular)