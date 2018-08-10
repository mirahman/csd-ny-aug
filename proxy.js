var GetCapital = function() {

    this.getCapitalName = function(location) {
        if(location == "England") {
            return "London";
        } else if(location == "USA") {
            return "Washington DC";
        }
    }
}

var GetCapitalGoogle = function() {
    this.getCapitalName = function(location) {
        if(location == "England") {
            return "From google i got : London";
        } else if(location == "USA") {
            return "From google i got : Washington DC";
        }
    }
}

var GetCapitalProxy = function() {
    this.service = new GetCapitalGoogle;
    this.getCapitalName = function(location) {
        return this.service.getCapitalName(location);
    }
}


var capitalService = new GetCapitalProxy();

console.log(capitalService.getCapitalName('USA'));
console.log(capitalService.getCapitalName('England'));
