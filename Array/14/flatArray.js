function flatArray(array) {
    let result = [];
    //    return  array.reduce((acc, curr) => {
    //         if (Array.isArray(curr)) {
    //             return acc.concat(flatArray(curr))
    //         } else {
    //             return acc.concat(curr)
    //         }
    //     }, [])

    for (let i = 0; i < array.length; i++) {
        let curr = array[i]
        if (Array.isArray(curr)) {
            let flat = flatArray(curr);
            for (let j = 0; j < flat.length; j++) {
                result[result.length] = flat[j]
            }
        } else {
            result[result.length] = curr
        }
    }
    return result
}

console.log('output:', flatArray([
    [5, 1, 2],
    [1, 2, 3, 4],
    [2, 2, 3],
    [0, 5, 9, 15, 23]
]));
