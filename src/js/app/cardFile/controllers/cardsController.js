(function(window,angular){
    angular.module('cardFile')
        .controller('cardsController',['getLists','currentCard','$state','contactList',function(getLists,currentCard,$state,contactList){
            var cardsCtrl = this;

            // dropdown options
            cardsCtrl.cardTypes = ["All Cards","Customer","Vendor"];
            cardsCtrl.filters = [
                {display:"First Name",value:"firstName"},
                {display:"Last Name",value:"lastname"},
                {display:"Company Name",value:"name"},
                {display:"Card ID",value:"cardID"},
                {display:"Phone Number",value:"phoneNumber"},
                {display:"Email",value:"email"},
                {display:"Address",value:"address"},
                {display:"City",value:"city"},
                {display:"Province",value:"province"},
                {display:"Postal Code", value:"postalCode"},
                {display:"Country", value:"country"}
            ];
            cardsCtrl.regexFilters = ["Starts With","Contains"]

            // dropdown presets
            cardsCtrl.filterProp = cardsCtrl.filters[2];
            cardsCtrl.filterRegex = cardsCtrl.regexFilters[0];

            // tab and card type filter preset
            cardsCtrl.currentType = '';

            // clicking on tabs to show active state
            cardsCtrl.selectType = function(type){
                cardsCtrl.currentType = type != 'All Cards' ? cardsCtrl.firstLetterUpperCase(type): '';
            };

            cardsCtrl.firstLetterUpperCase = function(str){
                return str.replace(/^[a-z]/i,function(match){
                    return match.toUpperCase();
                })
            };

            cardsCtrl.edit = function(contact){
                currentCard.card = contact;
                console.log(contact);
                $state.go('edit');
            }

            // grab all contacts

            contactList.getContacts().then(function(data){
                cardsCtrl.contacts = data;
            },function (res){
                throw Error('Could not fetch data.');
            });

            // print all contacts (dev)

            cardsCtrl.printContacts = function(){
                console.log(cardsCtrl.contacts[0]);
            }

        }])
})(window,window.angular)