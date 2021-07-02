var expect = require('chai').expect;
const {PermanentEmployee, TemporaryEmployee} = require('../Employee');

describe("Employee Test",function(){
    describe("get full name of employee for permanent type of employee",function(){
        it("it should print full name of employee",function(){
            var permenentEmployee=new PermanentEmployee('John','Due');
            const fullName = permenentEmployee.fullname();
            expect(fullName).to.equal("John Due");
        })

        it("HR Policy of perment employee should be 'Permanent HR Policy'",function(){
            var permanentEmployee=new PermanentEmployee('John','Due');
            const hrPolicy = permanentEmployee.HRPolicy();
            expect(hrPolicy).to.equal("Permanent HR Policy");
        })
    })

    describe("get full name of employee for temp type of employee",function(){
        it("it should print full name of employee",function(){
            var tempEmployee=new TemporaryEmployee('John','Due');
            const fullName = tempEmployee.fullname();
            expect(fullName).to.equal("John Due");
        })

        it("HR Policy of temporary employee should be 'Temporary HR Policy'",function(){
            var tempEmployee=new TemporaryEmployee('John','Due');
            const hrPolicy = tempEmployee.HRPolicy();
            expect(hrPolicy).to.equal("Temporary HR Policy");
        })
    })
})