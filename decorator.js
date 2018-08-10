var Book = function(name, isbn, author) {

    this.name = name;
    this.isbn = isbn;
    this.author = author;

    this.show = function() {
        console.log("Book");
        console.log("Name:"+this.name);
        console.log("Author:"+this.author);
        console.log("ISBN:"+this.isbn);
    }

}

var DecoratedBook = function (book, price) {
    this.book = book;
    this.price = price;

    this.show = function() {
        console.log("Book");
        console.log("Name:"+book.name);
        console.log("Author:"+book.author);
        console.log("Price:"+this.price);
    }
}


var book1 = new Book('PHP 7', '12345', 'kent beck');
var book2 = new Book('PHP 5', '12345', 'kent beck');

var decoratedBook1 = new DecoratedBook(book1, "100");
decoratedBook1.show();
