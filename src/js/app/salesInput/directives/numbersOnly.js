(function(window,angular){
    angular.module('salesInput')
        .directive('numbersOnly',function(){        // under "Amount" allow only input of numbers
            return {
                restrict:'A',
              
                link:function(scope,el,attrs,ngModel){
                    el.bind('keypress',function(e){
                        var charToAdd = String.fromCharCode(e.which||e.charCode||e.keyCode);
                        if (!/\d|\./.test(charToAdd) || (/\./.test(attrs.numbersOnly) && charToAdd == '.')){      // match this pattern :  56.45, 56., 56
                            return e.preventDefault();
                        }
                    })
                }
            }
        })
})(window,window.angular)