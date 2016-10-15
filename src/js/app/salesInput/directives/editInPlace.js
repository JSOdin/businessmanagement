(function(window,angular){                      // reusable edit-in-place directive
    angular.module('salesInput')
        .directive('editInPlace',[function(){
            return {
                restrict:'A',
                link:function(scope,el,attrs){  // make sure to assign controller name to "ctrl" and set an empty controller.paperFields = []; in controller function.
                    var inputs = $(el).find('input'); // find all input elements within this directive element
                    var i = angular.element(inputs[inputs.length-1]);        // grab only the last input element
                    var fields = scope[attrs.ctrl].paperFields[attrs.showEditor] = scope[attrs.ctrl].paperFields[attrs.showEditor] || {};      // paperFields keeps track of all hide/show switches for input and displays
                    fields[attrs.prop] = true;
                    el.bind('click',function(e){                                          // click on the element (on which the directive resides to give focus to the input
                        scope[attrs.ctrl].paperFields[attrs.showEditor][attrs.prop] = false;
                        scope.$apply();
                        i.focus();
                    });

                    i.bind('blur',function(){                            // losing focus
                        scope[attrs.ctrl].paperFields[attrs.showEditor][attrs.prop] = true;
                        scope.$apply();
                    });

                    i.bind('keypress',function(e){                        // press enter to finish inputting
                        if ((e.which||e.charCode||e.keyCode) == 13){
                            scope[attrs.ctrl].paperFields[attrs.showEditor][attrs.prop] = true;
                            scope.$apply();
                        }
                    })
                }
            }
        }])
})(window,window.angular)


//  example usage:
//
/*   <td edit-in-place ctrl="SICtrl" show-editor="{{'summary'}}" prop="freight">
        <p  ng-show="SICtrl.paperFields.summary.freight">$ {{SICtrl.freight | getDecimal}}</p>
        <input numbers-only='{{SICtrl.freight}}' ng-hide="SICtrl.paperFields.summary.freight" class="form-control" type="text" ng-model="SICtrl.freight"/>
     </td> */
//  assign "show-editor" attrib to the namespace you want for paperFields. e.g.  paperFields.summary
//  assign "prop" to the exact name of the property for paperFields.   e.g. paperFields.summary.freight;