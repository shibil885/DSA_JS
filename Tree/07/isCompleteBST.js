class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
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
            return;
        }

        let node = this.root
        while (true) {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                    return
                }
                node = node.left
            } else {
                if (!node.right) {
                    node.right = newNode;
                    return
                }
                node = node.right
            }
        }
    }

    isCompleteBST() {
        let queue = [this.root];
        let lastNodeFound = false;

        while(queue.length) {
            let curr = queue.shift();
            if (!curr) {
                lastNodeFound = true;
            }else {
                if (lastNodeFound) return false;
                queue.push(curr.left)
                queue.push(curr.right)
            }

        }

        return true;
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
console.log('is complete', bst.isCompleteBST());
