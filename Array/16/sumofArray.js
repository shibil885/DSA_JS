function sumOfArray(array) {
    if (!array.length) return 0;
    return array[0] + sumOfArray(array.slice(1))
}
console.log(sumOfArray([1,2,3,4,5,6]));
