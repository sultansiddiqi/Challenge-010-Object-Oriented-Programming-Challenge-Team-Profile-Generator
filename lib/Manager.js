const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber){
        super(name, id, email); // this sets the name id email that was in the Employee class, so we don't have to rewrite it
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    //this is how we override methods inherited from the parent class
    getRole() {
        return "Manager";
    }

}

module.exports = Manager;