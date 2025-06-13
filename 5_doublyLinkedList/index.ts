//Assignment 7.5 - Doubly linked list
class Dnode {
  value: number;
  prev: Dnode | null = null;
  next: Dnode | null = null;

  constructor(IValue: number) {
    this.value = IValue;
  }
}

class DoublyLList {
  public head: Dnode | null;

  constructor(IValue: number) {
    if (IValue == undefined) this.head = null;
    else {
      const newNode = new Dnode(IValue);
      this.head = newNode;
    }
  }

  public add(value: number) {
    const newNode = new Dnode(value);
    if (!this.head) this.head = newNode;
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
console.log(dlist.head?.next?.next?.value);
