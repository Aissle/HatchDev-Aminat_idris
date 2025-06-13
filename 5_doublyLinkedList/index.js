"use strict";
var _a, _b, _c;
//Assignment 7.5 - Doubly linked list
class Dnode {
    constructor(IValue) {
        this.prev = null;
        this.next = null;
        this.value = IValue;
    }
}
class DoublyLList {
    constructor(IValue) {
        if (IValue == undefined)
            this.head = null;
        else {
            const newNode = new Dnode(IValue);
            this.head = newNode;
        }
    }
    add(value) {
        const newNode = new Dnode(value);
        if (!this.head)
            this.head = newNode;
        else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            newNode.prev = currentNode;
            currentNode.next = newNode;
        }
    }
}
const dlist = new DoublyLList(0);
console.log(dlist);
dlist.add(10);
dlist.add(20);
dlist.add(30);
console.log((_c = (_b = (_a = dlist.head) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.next) === null || _c === void 0 ? void 0 : _c.value);
