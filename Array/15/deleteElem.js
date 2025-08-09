function deleteElement(array, target) {
    let index = -1
    for (let i = 0; i < array.length; i++) {       
        if (array[i] == target) {
            index = i
            break
        }        
    }
    if(index == -1) return array;

    for (let i = index; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.length = array.length -1
    return array
}

console.log(deleteElement([1,2,3,4,5,6,7,8,9,10], 1));
