// reusable component for modals. highlights selected cells and allows adding to lists.

(function(window,angular){
    angular.module('modalList',[])
        .factory('modalAPI',[function(){
            var currentPick = {};
            
            return {
                highlightMatch : highlightMatch,
                quickAdd : quickAdd,
                currentPick : currentPick
            }

            function highlightMatch(ctrl,term,col,exactMatch){
                if (/[^a-z0-9 ]/i.test(term)){
                    return;
                }

                var regExp;
                ctrl.searchTerm = term;
                ctrl.match = {};   // namespace to keep track of highlighted elements. need to refresh every iteration
                var arr = ctrl[col].filter(function(ea){
                    regExp =exactMatch ?  new RegExp('^'+term+'$', 'i') : new RegExp('^'+term, 'i');
                    return regExp.test(ea.value);
                });
                var shortest = arr.length  ? arr.reduce(function(a,b){  // pick out the shortest of our matches (which should he high priority match.)
                    return a.value.length < b.value.length ? a : b;
                }):{value:''};

                currentPick.pick = shortest;
                return ctrl.match[shortest.value] = true;                  // highlight the cell with shortest match.
            }

            function quickAdd(ctrl,col,item){
                var obj = {
                    value: item,
                    display: item
                };
                var doesNotContain = ctrl[col].every(function(ea){
                    return obj.value != ea.value;
                });
                if (doesNotContain){
                    ctrl[col].push(obj);
                    return ctrl.highlightMatch(ctrl, item, col,true);
                }
            }
        }])
})(window,window.angular)