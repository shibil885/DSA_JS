class Node {
    constructor(value) {
        this.value = value
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
    isPefectTree() {
        let node = this.root
        let depth = this.getDepth(node);

        return this.checkPerfection(node, 0, depth)
    }
    getDepth(node) {
        let depth = 0
        while (node.left) {
            node = node.left
            depth++
        }
        return depth
    }
    checkPerfection(node, level, depth) {
        if (!node) return true;

        if (!node.left && !node.right) return level == depth;
        if (!node.left || !node.right) return false;
        return this.checkPerfection(node.left, level + 1, depth) && this.checkPerfection(node.right, level + 1, depth)
    }

}

let bst = new BST()
console.log(bst);
bst.add(6)
bst.add(5)
bst.add(7)
bst.add(4)
bst.add(5.5)
bst.add(6.5)
bst.add(8)

console.log('is perfect', bst.isPefectTree());
