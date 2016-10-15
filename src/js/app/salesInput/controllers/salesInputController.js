(function(window,angular){
    angular.module('salesInput')
        .controller('salesInputController',['getLists','$scope','inventory','salesData', 'contactList',function SICtrl(getLists,$scope,inventory,salesData,contactList){
            var SICtrl = this;

            // to go into post form

            // 1) SICtrl.selectedFormType
            // 2) SICtrl.selectedContact
            // 3) SICtrl.selectedTerm
            // 4) SICtrl.invoiceNum
            // 5) SICtrl.issueDate
            // 6) SICtrl.customerPONum
            // 7) SICtrl.items
            // 8) SICtrl.subTotal;
            // 9) SICtrl.taxTotal;
            // 10) SICtrl.total;
            // 11) SICtrl.freight
            // 12) SICtrl.paidToday
            // 13) SICtrl.balanceDue
            // 14) SICtrl.shipping
            // 15) SICtrl.promiseDate
            // 16) SICtrl.notes

            // prseets and ng-options
            SICtrl.paperFields = [];        // governs the flip between data display and input


            SICtrl.selectedContact = null;
            SICtrl.formTypes = getLists.getOptionList('formTypes');
            SICtrl.terms = getLists.getOptionList('terms');

            SICtrl.issueDate = new Date();
            SICtrl.items = [new Item()];

            // getting invoice num
            salesData.getCurrentInvoiceNum().then(function(data){
                var parts = data.num.match(/([a-z]+)(\d+)/i);
                parts[parts.length-1]++;
                SICtrl.invoiceNum = parts[1]+parts[parts.length-1];
            });

            // getting contacts

            contactList.getContacts().then(function(data){
                SICtrl.contacts =data;
            },function (res){
                throw Error('Could not fetch data.');
             });

            // getting accounts
            getLists.getList('accounts').then(function(data){
                SICtrl.accounts =data;

            },function (res){
                throw Error('Could not fetch data.');
            });

            // getting jobs
            getLists.getList('jobs').then(function(data){
                SICtrl.jobs = data;
            },function (res){
                throw Error('Could not fetch data.');
            });

            // getting departments
            getLists.getList('departments').then(function(data){
                SICtrl.departments = data;
            },function (res){
                throw Error('Could not fetch data.');
            });

            // getting products
            inventory.getProductList().then(function(data){
                SICtrl.products = data;
                console.log(inventory.returnProductList());
            },function (res){
                throw Error('Could not fetch data.');
            });

            // getting taxes
            getLists.getList('taxes').then(function(data){
                SICtrl.taxes = data;
            },function (res){
                throw Error('Could not fetch data.');
            });

            // get shipping types
            getLists.getList('shippings').then(function(data){
                SICtrl.shippings = data;
            },function (res){
                throw Error('Could not fetch data.');
            });

            // calendar button
            SICtrl.openCalendar = function(second){
                if (second){
                    return SICtrl.calendarTwoIsOpen = true;
                }
                SICtrl.calendarIsOpen = true;
            }

            // adding rows to the sheet
            SICtrl.addRow = function(){
                SICtrl.items.push(new Item());
            }

            // delete rows
            SICtrl.deleteRow=function(index){
                SICtrl.items.splice(index,1);
                SICtrl.paperFields.splice(index,1);
            }

            // submit the sales form
            SICtrl.submit=function(){
                console.log(SICtrl.items)
                console.log(SICtrl.tax)
                console.log(SICtrl.items.freight)
            }

            // get item total
            SICtrl.getItemTotal = function(item){
                return  item.itemTotal = item.product.price*(1-item.discount/100)  * item.quantity;
            };

            // get total without tax
            SICtrl.getSubTotal = function(items){
                return SICtrl.subTotal = items.reduce(function(a,b){
                    return a+b.itemTotal;
                },0)
            }

            // get total of tax only
            SICtrl.getTaxTotal = function(items){
                return SICtrl.taxTotal = items.reduce(function(a,b){
                    return a+b.itemTotal*(parseFloat(b.tax.percent)/100);
                },0)
            };

            // get total including all
            SICtrl.getTotal = function(){
                return SICtrl.total = SICtrl.taxTotal+SICtrl.subTotal;
            };

            // get balance due
            SICtrl.getBalanceDue = function(){
                return SICtrl.balanceDue = (SICtrl.total||0)+ ((+SICtrl.freight||0) - (+SICtrl.paidToday||0));
            }

            // row constructor
            function Item(){
                this.quantity='';

                this.product ={
                    itemnumber:'',
                    name:'',
                    price:0
                };

                this.discount='';
                this.account= {"id":"","name":"","type":""};
                this.itemTotal = 0;
                this.job={"id":"","Description":""};
                this.dept={"abbv":"","name":""};
                this.tax={"abbv":"","name":"","type":"","percent":"0%"};
            }
        }])
})(window,window.angular)