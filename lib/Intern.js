const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school){
        super(name, id, email); // this sets the name id email that was in the Employee class

        this.school = school;
    }

    getSchool(){
        return this.school;
    }
    //this is how we override methods inherited from the parent class
    getRole() {
        return "Intern";
    }

}

module.exports = Intern;