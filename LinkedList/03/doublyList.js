class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(data) {
        const node = new DLLNode(data);
        node.next = this.head;
        if (this.head) this.head.prev = node;
        this.head = node;
    }

    insertAtEnd(data) {
        const node = new DLLNode(data);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = node;
        node.prev = current;
    }

    insertAt(index, data) {
        if (index === 0) return this.insertAtBeginning(data);

        let current = this.head;
        let count = 0;
        while (current && count < index) {
            current = current.next;
            count++;
        }

        if (!current) {
            this.insertAtEnd(data);
            return;
        }

        const node = new DLLNode(data);
        node.prev = current.prev;
        node.next = current;
        if (current.prev) current.prev.next = node;
        current.prev = node;
    }

    deleteValue(value) {
        let current = this.head;

        while (current) {
            if (current.data === value) {
                if (current.prev) current.prev.next = current.next;
                else this.head = current.next;

                if (current.next) current.next.prev = current.prev;

                break;
            }
            current = current.next;
        }
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) return true;
            current = current.next;
        }
        return false;
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if (temp) this.head = temp.prev;
    }

    printForward() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' ⇄ ';
            current = current.next;
        }
        console.log(result + 'null');
    }

    printBackward() {
        let current = this.head;
        if (!current) return;

        while (current.next) current = current.next;

        let result = '';
        while (current) {
            result += current.data + ' ⇄ ';
            current = current.prev;
        }
        console.log(result + 'null');
    }
}
