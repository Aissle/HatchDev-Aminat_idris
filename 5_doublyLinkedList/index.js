//Assignment 7.5 - Doubly linked list
var Dnode = /** @class */ (function () {
    function Dnode(IValue) {
        this.prev = null;
        this.next = null;
        this.value = IValue;
    }
    return Dnode;
}());
var DoublyLList = /** @class */ (function () {
    function DoublyLList(IValue) {
        if (IValue == undefined)
            this.head = null;
        else {
            var newNode = new Dnode(IValue);
            this.head = newNode;
        }
    }
    DoublyLList.prototype.add = function (value) {
        var newNode = new Dnode(value);
        if (!this.head)
            this.head = newNode;
        else {
            var currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            newNode.prev = currentNode;
            currentNode.next = newNode;
        }
    };
    DoublyLList.prototype.reverse = function () {
        var current = this.head;
        while (current) {
            if (current.next == null)
                this.head = current;
            //store the next value in cont next
            var next = current === null || current === void 0 ? void 0 : current.next;
            //set the next value to thr prev value.
            current.next = current === null || current === void 0 ? void 0 : current.prev;
            //set the prev value to the next value
            current.prev = next;
            //set current to next
            current = next;
        }
    };
    return DoublyLList;
}());
var dlist = new DoublyLList(0);
console.log(dlist);
dlist.add(10);
dlist.add(20);
dlist.add(30);
console.log(dlist);
dlist.reverse();
console.log(dlist);
//console.log(dlist.head?.next?.next?.value);
