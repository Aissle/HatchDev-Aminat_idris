"use strict";
// assignments...
//Assignment 8 - circular linked list
class Cnode {
    constructor(Ivalue) {
        this.next = null;
        this.value = Ivalue;
    }
}
class CircularLinkedList {
    constructor(Ivalue) {
        this.head = null;
        if (Ivalue !== undefined) {
            const newNode = new Cnode(Ivalue);
            this.head = newNode;
            this.head.next = newNode;
        }
    }
    add(value) {
        const newNode = new Cnode(value);
        if (!this.head) {
            this.head = newNode;
            this.head.next = newNode;
        }
        else {
            let currentNode = this.head;
            while (currentNode.next !== this.head && currentNode.next !== null) {
                currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next;
            }
            currentNode.next = newNode;
            newNode.next = this.head;
        }
    }
}
const list = new CircularLinkedList(0);
console.log(list);
list.add(10);
list.add(20);
list.add(30);
console.log(list);
