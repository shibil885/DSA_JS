function findMidInRotatedSortedArr(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {

        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > arr[high]) low = mid + 1;
        else high = mid;
    }
    return arr[low]

    /*
      - Time: O(log n)
      - spac: O(1)
    */
}

console.log(findMidInRotatedSortedArr([5, 6, 2, 3, 4]));