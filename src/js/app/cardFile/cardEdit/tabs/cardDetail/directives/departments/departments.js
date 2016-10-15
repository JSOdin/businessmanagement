(function(window,angular){
    angular.module('cardFile.edit')
        .directive('department',['modal',function(modal){
            return {
                restrict:'E',
                scope:{
                    selectedDepartment:'=',
                    options: '='
                },
                template:'<div class="input-group"><span class="input-group-btn"><button class="btn btn-default" type="button" ng-click="openModal(modalSize, {}, modalType, selectedDepartment)"><span class="glyphicon glyphicon-cog"></span></button></span>'+
                '<input type="text" class="form-control" ng-model="selectedDepartment.value"/>' +
                '</div>',
                link:function(scope,el,attrs){
                    scope.modalSize = "sm";
                    scope.modalType = 'departments';
                    scope.openModal = function(size,data,modalType, selected){
                        var payload = {
                            data:scope.options,
                            selected:selected
                        }
                        modal.openModal(size,payload,modalType).then(function(selectedItem){
                            scope.selectedDepartment = selectedItem;
                        })
                    }
                }
            }
        }])
})(window,window.angular)