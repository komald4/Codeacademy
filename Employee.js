

class Employee {
    
    constructor(_firstname,_lastname,_isPermanent){
        this.firstname=_firstname;
        this.lastname=_lastname
        this.isPermanentEmployee=_isPermanent;
    }
    fullname(){
        return this.firstname+' '+this.lastname;
    }

}

class PermanentEmployee extends Employee{
    constructor(fname,lname){
        super(fname,lname,true);
    }

    HRPolicy(){
        return 'Permanent HR Policy'
    }

    setAnnualSalary(amount){
        this.annualSalary=amount;
    }
}

class TemporaryEmployee extends Employee{
    constructor(fname,lname){
        super(fname,lname,false);
    }

    HRPolicy(){
        return 'Temporary HR Policy'
    }

    // setHourlySalary(amount){
    //     this.HourlySalary=amount;
    // }
}

module.exports={
    PermanentEmployee,
    TemporaryEmployee
}