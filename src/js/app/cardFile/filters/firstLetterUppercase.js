(function(window,angular){
    angular.module('cardFile')
        .filter('firstLetterUppercase',[function(){
            return function(input){
                if (input){
                    return input.replace(/^[a-z]/,function(match){
                        return match.toUpperCase();
                    })
                }
            }
        }]);
})(window,window.angular)