class Stack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val)
        if (!this.minStack.length || val <= this.minStack[this.minStack.length -1]) {
            this.minStack.push(val);
        }
    }
    pop() {
        let top = this.stack.pop();
        if (top == this.minStack[this.minStack.length -1]) this.minStack.pop();
        return top;
    }
    top() {
        return this.stack[this.stack.length -1];
    }
    getMin() {
        return this.minStack[this.minStack.length -1];
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
console.log(stack.getMin());

