class Book2 {
  public readonly title: string;
  public noInStock: number;

  constructor(title: string, noInStock: number) {
    this.title = title;
    this.noInStock = noInStock;
  }
}

class Member2 {
  name: string;
  borrowedBooks: Book2[] = [];

  constructor(name: string) {
    this.name = name;
  }

  borrowBook(book: Book2) {
    if (!this.borrowedBooks.includes(book)) {
      if (book.noInStock > 0) {
        this.borrowedBooks.push(book);
        book.noInStock--;
        console.log("borrow sucessful");
      } else {
        console.log("borrow failed");
      }
    }
  }

  returnBook(book: Book2) {
    let index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1);
      book.noInStock++;
      console.log("returned");
    } else {
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
