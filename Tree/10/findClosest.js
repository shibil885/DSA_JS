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

    findClosest(value) {
        let closest = this.root.value
        let node = this.root

        while (node) {
            if (Math.abs(node.value - value) < Math.abs(value - closest)) {
                closest = node.value;
            }
            if (value < node.value) {
                node = node.left
            } else if (value > node.value) {
                node = node.right
            } else {
                break
            }
        }
        return closest
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

console.log('closest', bst.findClosest(3));
