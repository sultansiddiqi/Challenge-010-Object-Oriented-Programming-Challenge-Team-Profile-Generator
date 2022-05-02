const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, gitHub){
        super(name, id, email); // this sets the name-id-email that was taken from the Employee class
        this.gitHub = gitHub;
    }

    getGitHub(){
        return this.gitHub;
    }
    //this is required so that we can override methods from the interited parent
    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;