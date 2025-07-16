class MinHeap {
    constructor() {
        this.heap = [];
    }
    add(value) {
        this.heap.push(value)
        if (this.heap.length > 1) {
            this._heapifyUp(this.heap.length - 1);
        }
    }
    _heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[index][0] < this.heap[parentIndex][0]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex
            parentIndex = Math.floor((index - 1) / 2)
        }
    }

    extract() {

        if (this.heap.length > 1) {
            let minElem = this.heap[0];
            this.heap[0] = this.heap.pop()
            this._heapifyDown(0)
            return minElem
        }
        return this.heap.pop()
    }
    _heapifyDown(i) {
        let left = Math.floor(2 * i + 1);
        let right = Math.floor(2 * i + 2);
        let n = this.heap.length;
        let small = i;

        if (left < n && this.heap[left][0] < this.heap[small][0]) {
            small = left;
        }
        if (right < n && this.heap[right][0] < this.heap[small][0]) {
            small = right;
        }

        if (small != i) {
            [this.heap[small], this.heap[i]] = [this.heap[i], this.heap[small]];
            this._heapifyDown(small);
        }
    }

    mergeKSortedArray(arrays) {
        let result = [];
        for (let i = 0; i < arrays.length; i++) {
            this.add([arrays[i][0], i, 0])
        }
        while (this.heap.length) {
            let [value, arrIdx, elemIdx] = heap.extract();
            result.push(value);
            if (elemIdx + 1 < arrays[arrIdx].length) {
                this.add([arrays[arrIdx][elemIdx + 1], arrIdx, elemIdx + 1])
            }
        }
        console.log('res', result);
        return result;
    }
}
let heap = new MinHeap()
heap.mergeKSortedArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]])