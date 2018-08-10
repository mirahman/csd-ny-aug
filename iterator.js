var Iterator = function(items) {
    this.counter = 0;
    this.items = items;

    this.first = function() {
        return this.items[0];
    }

    this.next = function() {
        return this.items[++this.counter];
    }

    this.hasNext = function() {
        return this.counter <= this.items.length-1;
    }

    this.reset = function() {
        this.counter = 0;
    }
}

var mixed = ['abc', 1, 2, 3, "def", 4, 5];

var it = new Iterator(mixed);

for(var item = it.first();it.hasNext();item = it.next()) {
     console.log(item);
}

