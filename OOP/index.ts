// 00000000000000000000000000000000000000000000000000000000000000000000000000000
// ASSIGNMENT 1: Library Management System
// Description:
// A simple system to manage books and members of a library using OOP principles.
//

console.log("...Assinment 1...");
// class Book - A book class describing a book object.
// properties: title, author, no of pages.
// Methods:
// constructir function.
// information() - a method that reads out the book sproperties.
// welcome() - a static method to welcome people to the library.
class Book {
  public readonly title: string;
  public readonly author: string;
  public noOfPages: number;

  constructor(title: string, author: string, noOfPages: number) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
  }

  public information() {
    console.log(`The book's title is "${this.title}", author is ${this.author},
            and has ${this.noOfPages} pages.`);
  }
  static welcome() {
    console.log(`Welcome, this is a book from UNILAG library.`);
  }
}

// class Member- an object describing a member
// properties:
// name: - member name'
// dateJoined - the date they joined the library as a member'
// readBooksCount: - the number of books they have read;
// lastReadBook - the object of the book the member read last ;
// methods:
// A constructor function
// readBook() - update info when a new book is read.
// information() - displayes members information.
// test() - prints the Member object.s

class Member {
  public name: string;
  public readonly dateJoined: Date;
  private readBooksCount: number;
  private lastReadBook: Book | undefined;

  constructor(name: string) {
    this.name = name;
    this.dateJoined = new Date();
    this.readBooksCount = 0;
  }

  public readBook(lastBook: Book) {
    this.readBooksCount += 1;
    this.lastReadBook = lastBook;
  }

  public information() {
    console.log(
      `This members name is ${this.name}, member joined on ${this.dateJoined},`
    );
    if (this.readBooksCount > 0) {
      console.log(`member have read ${this.readBooksCount} books, 
        the last one being ${this.lastReadBook?.title}.`);
    } else {
      console.log("member haven't read any books yet.");
    }
  }
  public test() {
    console.log(this);
  }
}

//test
const book1 = new Book("snails", "snailKing", 68);
const book2 = new Book("houses", "David king", 56);
const member1 = new Member("Jane");
const member2 = new Member("Joe");
member1.readBook(book1);
member1.readBook(book2);
member1.information();
member2.information();
member1.test();
member2.test();

// ASSIGNMENT 2: Simple Task Manager
// Description:
// A task manager to create, update, complete, and list tasks.

console.log("...Assinment 2...");
// Class tasks - an class representing a task as on object.
// properties:
// task - the task
// completed - a boolen that is true if the task has been done
// dueby - the day of the wek it has to be done by
// methods:
// constructor function
// details() - lists out the task, if it is completed and when it is due
// check()- Marks the task as completed.

class Task {
  public task: string;
  public completed: boolean;
  public dueBy: string;

  constructor(task: string, dueBy: string) {
    this.task = task;
    this.completed = false;
    this.dueBy = dueBy;
  }

  public details() {
    console.log(`You have to ${this.task},`);
    if (this.completed == true) console.log(`You already completed this task`);
    else console.log(`it is due by ${this.dueBy}.`);
  }

  public check() {
    if (this.completed == true)
      console.log(`you have already ticked this completed`);
    else {
      this.completed = true;
      console.log(`Completed task`);
    }
  }
}

//test
const task1 = new Task("take out trach", "Friday");
const task2 = new Task("attend hatchdev class", "friday 4pm");
const task3 = new Task("submit assignment", "thurday");
task2.check();
task1.details();
task2.details();
task3.details();
