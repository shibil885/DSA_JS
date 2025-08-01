class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }

}


class LinkedList {
    constructor() {
        this.head = null;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return
        }
        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }

        curr.next = newNode;
    }

    findLast3Elem() {
        let curr = this.head;
        let queue = [];

        while (curr) {
            queue.push(curr.value)
            if (queue.length > 3) {
                queue.shift()
            }
            curr = curr.next
        }
        return queue;
    }

    twoPointer() {
        let fast = this.head;
        let slow = this.head;
        for (let i = 0; i < 3; i++) {
            if (!fast) return []
            fast = fast.next;
        }

        while (fast) {
            fast = fast.next
            slow = slow.next
        }

        let result = [];
        while (slow) {
            result.push(slow.value)
            slow = slow.next
        }
        return result
    }

}
let ll = new LinkedList()
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.push(5)
ll.push(6)
ll.push(7)
ll.push(8)
ll.push(9)
ll.push(10)
console.log(ll.findLast3Elem());
console.log(ll.twoPointer());
