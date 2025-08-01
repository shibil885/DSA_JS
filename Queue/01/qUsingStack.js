/**
 * Q -> Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 * 
 * Input
 * ["MyQueue", "push", "push", "peek", "pop", "empty"] [[], [1], [2], [], [], []]
 * Output
 * [null, null, null, 1, 1, false]
*/

class Queue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    enqueu(val) {
        this.inStack.push(val);
    }

    dequeu() {
        if (!this.outStack.length) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }
    peek() {
        if (!this.outStack.length) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack[this.outStack.length -1];
    }
}

let q = new Queue();
q.enqueu(1)
q.enqueu(2)
q.enqueu(3)
q.enqueu(4)
q.enqueu(5)
q.dequeu()
console.log(q.peek());
