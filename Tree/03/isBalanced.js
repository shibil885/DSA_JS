class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
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

    isBalanced() {
        let dfs = (node) => {
            if (!node) return 0;

            let left = dfs(node.left);
            if (left === -1) return -1;

            let right = dfs(node.right);
            if (right === -1) return -1;

            if (Math.abs(left - right) > 1) return -1
            return Math.max(left, right) + 1
        }
        return dfs(this.root) !== -1
    }
}

let tree = new BinaryTree();
tree.add(1)
tree.add(2)
tree.add(3)
tree.add(4)
tree.add(5)
tree.add(6)
tree.add(7)
tree.add(8)
tree.add(9)
tree.add(10)

console.log('is balanced', tree.isBalanced());
