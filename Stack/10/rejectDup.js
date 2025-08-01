class Stack {
    constructor() {
        this.stack = [];
        this.set = new Set();
    }
    push(val) {
        if (!this.set.has(val)) {
            this.stack.push(val)
            this.set.add(val)
        } else {
            console.log(`${val} exist`);
        }
    }
    pop() {
        if (this.stack.length === 0) return null;
        let top = this.stack.pop();
        this.set.delete(top);
        return top
    }
}

let stack = new Stack();
stack.push(1)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(4)
console.log(stack.stack);
