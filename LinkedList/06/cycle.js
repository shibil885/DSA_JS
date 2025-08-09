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
    detectCycle() {
        let fast = this.head;
        let slow = this.head;

        while (fast && fast.next) {
            fast = fast.next.next
            slow = slow.next
            if (slow == fast) return true
        }
        return false;
    }

}
let ll = new LinkedList()
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.push(5)
console.log(ll.detectCycle());

console.log(JSON.stringify(ll));

