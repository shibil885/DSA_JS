/**
 * Q -> Given the head of a singly linked list, reverse the list, and return the reversed list.
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
*/


function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let next = curr.next
        curr.next = prev;
        prev = curr
        curr = next;
    }
    return prev
}

// rec
function _reverseRec(node, prev = null) {
    if (!node) return prev;

    const next = node.next;
    node.next = prev
    return this._reverseRec(next, node)
}
