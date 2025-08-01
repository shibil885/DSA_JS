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
    removeMid() {
        if (!this.head || !this.head.next) {
            this.head = null;
            return;
        }
        let prev = null;
        let fast = this.head
        let slow = this.head;

        while (fast && fast.next) {
            prev = slow
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next;
    }


}
let ll = new LinkedList()
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.push(5)
ll.removeMid()
console.log(JSON.stringify(ll));

