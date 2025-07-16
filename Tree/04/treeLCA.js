class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode
            return;
        }

        let curr = this.root;
        while (true) {
            if (curr.value === value) return;

            if (value < curr.value) {
                if (!curr.left) {
                    curr.left = newNode;
                    return;
                }
                curr = curr.left
            } else {
                if (!curr.right) {
                    curr.right = newNode;
                    return;
                }
                curr = curr.right;
            }
        }
    }
    remove(value, node = this.root, parent = null) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.remove(value, node.left, node);
        } else if (value > node.value) {
            node.right = this.remove(value, node.right, node)
        } else {
            if (!node.left && !node.right) return null;

            if (!node.left) return node.right
            if (!node.right) return node.left

            let minRight = this._getMin(node.right)
            node.value = minRight.value
            node.right = this.remove(minRight.value, node.right)
        }

        if (parent === null) this.root = node;
        return node
    }
    _getMin(node) {
        while (node.left) node = node.left;
        return node
    }
    findLCA(a, b) {
        return this.getLCA(a, b, this.root);
    }
    getLCA(a, b, node) {
        if (!node) return null;
        if (a < node.value && b < node.value) return this.getLCA(a, b, node.left)
        else if (a > node.value && b > node.value) return this.getLCA(a,b,node.right)
        else return node.value
}
}



let bst = new BinarySearchTree()
bst.insert(6)
bst.insert(5)
bst.insert(7)
bst.insert(4)
bst.insert(5.5)
bst.insert(6.5)
bst.insert(8)
console.log(JSON.stringify(bst.root, null, 5));
bst.remove(7)

console.log(JSON.stringify(bst.root, null, 5));
console.log('LCA:', bst.findLCA(6,5));