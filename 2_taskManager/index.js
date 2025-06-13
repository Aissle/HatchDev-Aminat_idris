"use strict";
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
    constructor(task, dueBy) {
        this.task = task;
        this.completed = false;
        this.dueBy = dueBy;
    }
    details() {
        console.log(`You have to ${this.task},`);
        if (this.completed == true)
            console.log(`You already completed this task`);
        else
            console.log(`it is due by ${this.dueBy}.`);
    }
    check() {
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
