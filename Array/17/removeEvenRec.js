// function removeEven(array, index = 0) {
//     if (index >= array.length) return [];

//     let curr = array[index];
//     let rest = removeEven(array, index + 1);
//     if (curr % 2 !== 0) {
//         return [curr, ...rest];
//     } else {
//         return rest;
//     }
//}

function removeEven(array, index = 0, result = []) {
    if (index >= array.length) return result;

    let curr = array[index];

    if (curr % 2 !== 0) {
        result[result.length] = curr
    }
    return removeEven(array,index + 1, result)
}

console.log(removeEven([1,2,3,4,5,6]));
