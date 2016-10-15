(function(window,angular){
    angular.module('cardFile.edit')
        .directive('customList',['modal',function(modal){
            return {
                restrict:'E',
                scope:{
                    selectedCustomList:'=',
                    options: '='
                },
                template:'<div class="input-group"><span class="input-group-btn"><button class="btn btn-default" type="button" ng-click="openModal(modalSize, {}, modalType, selectedCustomList)"><span class="glyphicon glyphicon-cog"></span></button></span>'+
                '<input type="text" class="form-control" ng-model="selectedCustomList.value"/>' +
                '</div>',
                link:function(scope,el,attrs){
                    scope.modalSize = "sm";
                    scope.modalType = 'customLists';
                    scope.openModal = function(size,data,modalType, selected){
                        var payload = {
                            data:scope.options,
                            selected:selected
                        }
                        modal.openModal(size,payload,modalType).then(function(selectedItem){
                            scope.selectedCustomList = selectedItem;
                        })
                    }
                }
            }
        }])
})(window,window.angular)