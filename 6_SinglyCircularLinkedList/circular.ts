// assignments...

//Assignment 8 - circular linked list

class Cnode {
  value: number;
  next: Cnode | null = null;

  constructor(Ivalue: number) {
    this.value = Ivalue;
  }
}

class CircularLinkedList {
  head: Cnode | null = null;

  constructor(Ivalue?: number) {
    if (Ivalue !== undefined) {
      const newNode = new Cnode(Ivalue);
      this.head = newNode;
      this.head.next = newNode;
    }
  }

  add(value: number) {
    const newNode = new Cnode(value);
    if (!this.head) {
      this.head = newNode;
      this.head.next = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode!.next !== this.head && currentNode!.next !== null) {
        currentNode = currentNode?.next;
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
