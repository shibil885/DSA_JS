class Stack {
  constructor() {
    this.queue = [];
  }

  push(x) {
    this.queue.push(x);

    // Rotate the queue to make the new element front
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  pop() {
    return this.queue.shift();  // Always removes front
  }

  top() {
    return this.queue[0];  // Peek front
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
