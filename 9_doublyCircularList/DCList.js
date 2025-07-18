//make a doubly circular list
var Dnode = /** @class */ (function () {
    function Dnode(IValue) {
        this.prev = null;
        this.next = null;
        this.value = IValue;
    }
    return Dnode;
}());
var DoublyCircularLinkedList = /** @class */ (function () {
    function DoublyCircularLinkedList(Ivalue) {
        this.head = null;
        if (Ivalue !== undefined) {
            var newNode = new Dnode(Ivalue);
            this.head = newNode;
            this.head.next = newNode;
            this.head.prev = newNode;
        }
    }
    DoublyCircularLinkedList.prototype.add = function (value) {
        var newNode = new Dnode(value);
        if (!this.head) {
            this.head = newNode;
            this.head.next = newNode;
            this.head.prev = newNode;
        }
        else {
            var lastNode = this.head.prev;
            this.head.prev = newNode;
            lastNode.next = newNode;
            newNode.next = this.head;
            newNode.prev = lastNode;
        }
    };
    return DoublyCircularLinkedList;
}());
var list = new DoublyCircularLinkedList(0);
console.log(list);
list.add(10);
list.add(20);
list.add(30);
console.log(list);
