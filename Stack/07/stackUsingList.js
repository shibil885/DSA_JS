class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (!this.top) return null;
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.length--;
    return poppedValue;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  print() {
    let current = this.top;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log("Stack (top → bottom):", result.join(" → "));
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print();       
console.log(stack.pop());  
console.log(stack.peek()); 
console.log(stack.isEmpty());
