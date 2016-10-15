(function(window,angular){
    angular.module('cardFile.edit')
        .directive('identifier',['modal',function(modal){
            return {
                restrict:'E',
                scope:{
                  identifiers:'=',
                   identifiersAbbv:'='
                },
                template:'<div class="input-group"><span class="input-group-btn"><button class="btn btn-default" type="button" ng-click="openModal(modalSize, identifiers, modalType, identifiersAbbv)"><span class="glyphicon glyphicon-cog"></span></button></span>'+
                        '<input type="text" class="form-control" ng-model="identifiersAbbv"/>' +
                        '</div>',
                link:function(scope,el,attrs){
                    var input = el.find('input');
                    input.bind('input',function(e){
                        e.target.value =scope.identifiersAbbv =  e.target.value.toUpperCase();  // e.target.value is populated always after scope.identifiersAbbv populates, so changing e.target.value only wont affect scope until the next event.
                       /* e.target.value = e.target.value.toUpperCase();  // this line runs after scope.identifiersAbbv changes, so e.target.value is always different from scope.identifiersAbbv
                        console.log(e.target.value)
                        console.log(scope.identifiersAbbv)*/
                    })

                    input.bind('keypress',function(e){
                        var charToAdd = String.fromCharCode(e.which||e.charCode||e.keyCode);
                        if (e.target.value.length >= 8 && getSelectedText()){       // detect text hihglight http://stackoverflow.com/questions/4712310/javascript-how-to-detect-if-a-word-is-highlighted
                            return true;
                        }
                        if (e.target.value.length >=8 || !/[a-z]/i.test(charToAdd)){
                            return e.preventDefault();
                        }
                    })

                    scope.modalSize = "lg";
                    scope.modalType = 'identifiers';
                    scope.openModal = function(size,data,modalType, abbvs){
                        var payload = {
                            data:data,          // this is CDCtrl.identifiers (ones we have labels for)
                            abbvs:abbvs         // this is TBCtrl.currentCard.identifiers (this is card specific identifiers that have been checked off
                        }
                        modal.openModal(size,payload,modalType);
                    }

                    function getSelectedText(){
                        var text= '';
                        if (typeof window.getSelection != "undefined"){
                            text = window.getSelection().toString();
                        } else if (typeof document.selection != "undefined" && document.selection.type == "Text"){
                            text = document.selection.createRange().text;
                        }
                        return text;
                    }
                }
            }
        }])
})(window,window.angular)