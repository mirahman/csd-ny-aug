var Shipping = function() { 
    this.shipIt = function(shippingMethod) {
        return shippingMethod.ship();
    }
}

var UPS = function() {
    this.ship = function(package) {
        return "$10.00";
    }
}

var USPS = function() {
    this.ship = function(package) {
        return "$5.00";
    }
}

var DHL = function() {
    this.ship = function(package) {
        return "$30.00";
    }
}

var FedEx = function() {
    this.ship = function(package) {
        return "$35.00";
    }
}

var Package = function(itemName, weight) {
    this.itemName = itemName;
    this.weight = weight;
}

let pack1 = new Package('TV', 30);
var shippingWay = new Shipping;
console.log(shippingWay.shipIt(new FedEx));
console.log(shippingWay.shipIt(new UPS));
