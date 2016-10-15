(function(window,angular){
    angular.module('cardFile.edit')
        .directive('uploadImage',[function(){
            return {
                restrict:'A',
                link:function(scope,el,attrs){
                    scope.files = [];
                    console.log(el);
                    el.on('change',function(){                      // fired when user inputs a file or files https://developer.mozilla.org/en-US/docs/Web/Events/change
                        angular.forEach(el[0].files,function(ea){   //  el looks like this: [input.form-control]
                            var file = new FileReader();            // make a filereader for each file
                            file.onload = function(e){              // handle the file load event
                                scope.files.push( e.target.result);   // push in each picture or file (e.target.result contains the file data)
                                scope.$apply();                       // update the DOM
                            }
                            file.readAsDataURL(ea);                   // read in each data;
                        });
                    })
                }
            }
        }])
})(window,window.angular)