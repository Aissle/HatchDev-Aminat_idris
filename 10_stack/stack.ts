//implement stack with a doubly linked list
//stack - last in first out - pop, push, peek

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

  public reverse() {
    let current: Dnode | null = this.head;
    while (current) {
      if (current.next == null) this.head = current;
      //store the next value in cont next
      const next: Dnode | null = current?.next;
      //set the next value to thr prev value.
      current.next = current?.prev;
      //set the prev value to the next value
      current!.prev = next;
      //set current to next
      current = next;
    }
  }
}

const dlist = new DoublyLList(0);
console.log(dlist);
dlist.add(10);
dlist.add(20);
dlist.add(30);
console.log(dlist);
dlist.reverse();
console.log(dlist);
//console.log(dlist.head?.next?.next?.value);
