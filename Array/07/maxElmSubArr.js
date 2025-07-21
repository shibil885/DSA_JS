function findLongestIncreasingRow(array) {
    let maxLength = 0;
    let row = [];
    for (let i = 0; i < array.length; i++) {
        let isInc = true;
        let length = 1;
        for (let j = 1; j < array[i].length; j++) {
            if (array[i][j] > array[i][j - 1]) {
                length++
            } else {
                isInc = false;
                break;
            }
        }

        if (isInc && length > maxLength) {
            maxLength = length;
            row = array[i]
        }
    }
    return row
}
console.log(findLongestIncreasingRow([
    [5, 1, 2],
    [1, 2, 3, 4],
    [2, 2, 3],
    [0, 5, 9, 15, 23]
]));