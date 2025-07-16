class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value)

        if (!this.root) {
            this.root = newNode
        }
        let node = this.root
        while (true) {
            if (value == node.value) return

            if (newNode.value < node.value) {
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
                node = node.right;
            }
        }
    }

    isValidBST(node = this.root, max = Infinity, min = -Infinity) {
        if (!node) return true;
        if (node.value <= min || node.value >= max) {
            return false
        }
        return this.isValidBST(node.left, node.value, min) && this.isValidBST(node.right,max,node.value)
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
console.log('is valid bst', bst.isValidBST());
