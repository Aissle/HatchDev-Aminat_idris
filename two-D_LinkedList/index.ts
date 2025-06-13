//colNode
class colNode {
  value: number;
  nextCol: colNode | null = null;

  constructor(Ivalue: number) {
    this.value = Ivalue;
  }
}

//rowNode
class rowNode {
  col: number = 1;
  nextRow: rowNode | null = null;
  colHead: colNode | null = null;

  constructor(Ivalue: number) {
    const newcolNode = new colNode(Ivalue);
    this.colHead = newcolNode;
  }
}

//linkedList
class LinkedList {
  rowHead: rowNode | null = null;

  public addvalue(value: number, col: number = -1) {
    const newRowNode = new rowNode(value);
    //if there is no rows - col doesn't matter
    if (this.rowHead == null) {
      this.rowHead = newRowNode;
    } else {
      let currentRow = this.rowHead;
      while (currentRow.nextRow !== null) {
        if (currentRow.col == col) break; //if col is less than or equal to existing col
        currentRow = currentRow.nextRow;
      }
      if (currentRow.col !== col && currentRow.nextRow === null) {
        //we have reach end of rows and col is either -1 or grater than current row - add a new row
        currentRow.nextRow = newRowNode;
        newRowNode.col = currentRow.col + 1;
      } else {
        const newColNode = new colNode(value);
        let currentCol = currentRow.colHead;
        while (currentCol!.nextCol !== null) {
          currentCol = currentCol!.nextCol;
        }
        currentCol!.nextCol = newColNode;
      }
    }
  }

  public PrintList() {
    if (this.rowHead == null) {
      console.log(`nothing yet`);
    } else {
      let currentRow: rowNode | null = this.rowHead;
      while (currentRow !== null) {
        console.log(`column: ${currentRow.col}`);
        let currentCol = currentRow.colHead;
        while (currentCol !== null) {
          console.log(currentCol?.value);
          currentCol = currentCol!.nextCol;
        }
        currentRow = currentRow.nextRow;
      }
    }
  }
}

function test() {
  const list = new LinkedList();
  list.addvalue(1);
  list.addvalue(2);
  list.addvalue(3, 5);
  list.addvalue(4, 2);
  list.addvalue(5, 2);
  list.PrintList();
}

test();
