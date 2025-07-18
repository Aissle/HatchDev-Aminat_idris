//make a doubly circular list

class Dnode {
  value: number;
  prev: Dnode | null = null;
  next: Dnode | null = null;

  constructor(IValue: number) {
    this.value = IValue;
  }
}

class DoublyCircularLinkedList {
  head: Dnode | null = null;

  constructor(Ivalue?: number) {
    if (Ivalue !== undefined) {
      const newNode = new Dnode(Ivalue);
      this.head = newNode;
      this.head.next = newNode;
      this.head.prev = newNode;
    }
  }

  add(value: number) {
    const newNode = new Dnode(value);
    if (!this.head) {
      this.head = newNode;
      this.head.next = newNode;
      this.head.prev = newNode;
    } else {
      let lastNode = this.head.prev;
      this.head.prev = newNode;
      lastNode!.next = newNode;
      newNode.next = this.head;
      newNode.prev = lastNode;
    }
  }
}

const list = new DoublyCircularLinkedList(0);
console.log(list);
list.add(10);
list.add(20);
list.add(30);
console.log(list);
