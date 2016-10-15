(function(window,angular){
    angular.module('cardFile')
        .filter('filterByProperty',[function(){
            return function(arr,prop,val,regex){
                prop = prop || {};
                var reg;

                if (!prop || !val || !regex){
                    reg = '';
                } else if (regex == "Starts With"){
                    reg = new RegExp('^'+val,'i');
                } else if (regex == 'Contains'){
                    reg = new RegExp(val,'i');
                } else {
                    reg = /./i;
                }

                if (arr){
                    return arr.filter(function(ea){
                        return reg ? reg.test(ea[prop.value]) : ea;
                    })
                }
            }
        }])
})(window,window.angular)