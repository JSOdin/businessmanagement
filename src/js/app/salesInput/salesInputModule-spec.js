describe('salesInput',function(){
    var SICtrl;
    beforeEach(module('ui.router'))
    beforeEach(module('salesInput'))
    beforeEach(inject(function($controller){
        SICtrl = $controller('salesInputController')
    }))
    it('should have the correct scope properties',function(){
        expect(SICtrl.formTypes).toEqual(['QUOTE','BILLING QUOTE','ORDER','INVOICE','CREDIT MEMO']);
    })
})