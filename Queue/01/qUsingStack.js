/**
 * Q -> Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 * 
 * Input
 * ["MyQueue", "push", "push", "peek", "pop", "empty"] [[], [1], [2], [], [], []]
 * Output
 * [null, null, null, 1, 1, false]
*/


class Queue {
    stack1 = [];
    stack2 = [];

    push(val) {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
        this.stack1.push(val)

        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop())
        }
    }
    pop() {
        return this.stack1.pop();
    }
    peek() {
        return this.stack1[this.stack1.length - 1]
    }
    empty() {
        return this.stack1.length == 0
    }
}


let q = new Queue();
q.push(10)
q.push(12)
q.push(13)
q.push(14)
q.pop(14)

console.log(q);
