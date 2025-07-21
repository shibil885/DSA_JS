function isTargetPartOfArr(arrays, target) {
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].includes(target)) return true
    }
    return false
    /*
  - Time: O(n * m) n is length of arr. m is search inside each arr.
  - Space: 
*/
}

console.log(isTargetPartOfArr([[1, 2, 4], [5, 7, 8], [12, 23, 34]], 823));