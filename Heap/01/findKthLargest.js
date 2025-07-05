/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 */


/**
 * create a min heap and add elme to it.
 *  maintain the siz of heap (k). 
 * if exceed remove the min Elem
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }

    add(value) {
        this.heap.push(value);
        if (this.heap.length > 1) {
            this._heapifyUp(this.heap.length - 1);
        }
    }
    _heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2)
        }
    }

    extract() {
        if (this.heap.length > 1) {
            let minElem = this.heap[0];
            this.heap[0] = this.heap.pop();
            this._heapifyDown(0);
            return minElem;
        }
        return this.heap.pop()

    }
    _heapifyDown(i) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let n = this.heap.length
        let small = i;

        if (left < n && this.heap[left] < this.heap[small]) {
            small = left
        }

        if (right < n && this.heap[right] < this.heap[small]) {
            small = right
        }

        if (i != small) {
            [this.heap[i], this.heap[small]] = [this.heap[small], this.heap[i]];
            this._heapifyDown(small)
        }
    }
}
var findKthLargest = function (nums, k) {
    let heap = new MinHeap();
    for (let e of nums) {
        heap.add(e);
        if (heap.heap.length > k) {
            heap.extract();
        }
    }
    return heap.heap[0]
};