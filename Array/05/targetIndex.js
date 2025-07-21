function findTargetIndex(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(target)) return { elm: array[i].indexOf(target), arr: i + 1 };
    }
    /*
      - Time: O(n * m) n is length of arr. m is search inside each arr.
      - Space: O(1)
    */
}
console.log(findTargetIndex([[1, 2, 3], [5, 6, 9], [10, 23, 34]], 9));

