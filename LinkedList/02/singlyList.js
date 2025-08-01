class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    unshift(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = newNode;
        }
    }
    set(index, value) {
        if (index == 0) return this.unshift(value);

        let curr = this.head;
        let count = 0;
        let prev  = null;
        while (curr && count < index) {
            prev = curr
            curr = curr.next
            count++
        }

        let newNode = new Node(value);
        newNode.next = curr
        if (prev) prev.next = newNode
    }

    delete(value) {
        if (!this.head) return
        if (this.head.value == value) {
            this.head = this.head.next;
            return
        }

        let curr = this.head
        while (curr.next && curr.next.value !== value) {
            curr = curr.next
        }
        if (curr.next) {
            curr.next = curr.next.next
        }
    }

    search(value) {
        let curr = this.head;
        while (curr) {
            if (curr.value == value) return true;
            curr = curr.next
        }
        return false
    }
    print() {
        let curr = this.head;
        let result = ''
        while (curr) {
            result += curr.value + ' -> '
            curr = curr.next
        }
        return result
    }
  }

  let ll = new LinkedList()
  ll.unshift(1)
  ll.push(2)
  ll.push(3)
  ll.push(4)
  ll.push(5)
  ll.push(6)
  ll.push(7)
  ll.push(8)
  ll.push(8)
  ll.push(9)
  ll.push(10)
  ll.unshift(10)
  ll.delete(10)
  ll.delete(8)
  ll.set(6, 100)
  console.log(ll.search(100));
  ll.delete(100)
  
  console.log(ll.print());