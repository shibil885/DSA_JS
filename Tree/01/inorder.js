/**
 * Q -> Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
*/



/**
 *         1
 * 
 *  null        2
 * 
 *         3
*/

function inorderTraversal(root) {
    res = [];
    function inorder(node) {
        if (node) {
            inorder(node.left);
            res.push(node.val);
            inorder(node.right);

        }
    }
    inorder(root);
    return res;
}