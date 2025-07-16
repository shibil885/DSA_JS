class Node {
    constructor(value) {
        this.value = value;
        this.left = null
        this.right = null

    }
}
class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        }
        let curr = this.root;
        while (true) {
            if (value == curr.value) return;

            if (value < curr.value) {
                if (!curr.left) {
                    curr.left = newNode;
                    return
                }
                curr = curr.left;
            } else {
                if (!curr.right) {
                    curr.right = newNode
                    return
                }
                curr = curr.right
            }
        }
    }

    bfs() {
        let queue = [this.root]
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);

            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
}


let bst = new BST()
bst.add(6)
bst.add(5)
bst.add(7)
bst.add(4)
bst.add(5.5)
bst.add(6.5)
bst.add(8)
bst.bfs()