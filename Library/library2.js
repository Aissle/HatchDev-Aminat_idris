"use strict";
class Book2 {
    constructor(title, noInStock) {
        this.title = title;
        this.noInStock = noInStock;
    }
}
class Member2 {
    constructor(name) {
        this.borrowedBooks = [];
        this.name = name;
    }
    borrowBook(book) {
        if (!this.borrowedBooks.includes(book)) {
            if (book.noInStock > 0) {
                this.borrowedBooks.push(book);
                book.noInStock--;
                console.log("borrow sucessful");
            }
            else {
                console.log("borrow failed");
            }
        }
    }
    returnBook(book) {
        let index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.noInStock++;
            console.log("returned");
        }
        else {
            console.log("return failed");
        }
    }
}
const book3 = new Book2("A", 2);
const book4 = new Book2("B", 2);
const jane = new Member("Jane");
const dayo = new Member("Dayo");
jane.borrowBook(book1);
jane.returnBook(book1);
