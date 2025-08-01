function removeAdjacentOdd(array) {
    console.log('Input:', array);
    
    let i = 0;
    while (i < array.length) {
        if (array[i] % 2 !== 0) {
            let start = i;

            while (i < array.length && array[i] % 2 !== 0) {
                i++
            }
            if ( i - start > 1) {
                array.splice(start, i - start);
                i = start;
            }
        }
        else {
            i++
        }
    }
    return array
}
console.log(removeAdjacentOdd([1,2,3,5,7,6,5,7,8,9,10,11,13,5]));
