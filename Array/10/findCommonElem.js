function findCommonElem(arr1,arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let isExist = false;
        
        for (let k = 0; k < result.length; k++) {
            if (arr1[i] == result[k]) {
                isExist = true;
                break;
            }
        }
        if (isExist) continue;

        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                result.push(arr1[i]);
                break;
            }            
        }
    }
    return result
}

console.log(findCommonElem([3, 4, 5, 6, 7, 3],[1, 2, 3, 4, 5, 2]));
