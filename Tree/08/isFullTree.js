class Node {
    constructor(value) {
        this.root = value
    }
}

class BST {
    constructor() {
        this.root = null
    }
    add(value) {
        const newNode = new Node(value)

        if (!this.root) {
            this.root = newNode;
        }

        let node = this.root
        while (true) {
            if (value == node.value) return
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode
                    return
                }
                node = node.left
            } else {
                if (!node.right) {
                    node.right = newNode
                    return
                }
                node = node.right
            }
        }
    }

    isFullTree(node = this.root) {
        if (!node) return true;
        if (!node.left && !node.right) return true;
        if (node.left && node.right)  {
            return this.isFullTree(node.left) && this.isFullTree(node.right);
        }
        return false;
    }
}