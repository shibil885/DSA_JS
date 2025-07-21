function addElemToMidd(array) {
    let mid = Math.floor(array.length / 2)
    array[mid] = 'new Value'
    return array
}
console.log(addElemToMidd([1,2,3,4,5]));