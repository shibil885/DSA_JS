function findLastOccu(array, target) {
    // return array.lastIndexOf(target)
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] == target) return i
    }
    return -1
}

console.log(findLastOccu([1, 2, 3, 4, 5, 6, ], 1));
