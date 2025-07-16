class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode
            return
        }
        let queue = [this.root];

        while (queue.length) {
            let curr = queue.shift();

            if (!curr.left) {
                curr.left = newNode
                return
            } else {
                queue.push(curr.left)
            }

            if (!curr.right) {
                curr.right = newNode;
                return
            } else {
                queue.push(curr.right)
            }
        }
    }

    getHeight(node = this.root) {
        if (!node) return -1
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    }

    inorder(node = this.root) {
        if (node) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }
}

let tree = new BinaryTree()
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
console.log('height', tree.getHeight());

tree.inorder()
