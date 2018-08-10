var ContractualEmployee = function(name) {
    this.name = name;
}

var Trainer = function(name, subject) {
    this.name = name;
    this.subject = subject;
}

var Factory = function() {
    this.createObject = function(whatINeed) {
        if(whatINeed == "Employee")
            return new ContractualEmployee();
        else if(whatINeed == "Trainer") 
            return new Trainer();
    };
}

let mizan = Factory.createObject('Employee');
let trainer1 = Factory.createObject('Trainer');

