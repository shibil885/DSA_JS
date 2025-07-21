function pairsWithSum(arr, target) {
    let result = [];
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        
        if (seen[diff]) {
            result.push([arr[i], diff])
        }

        seen[arr[i]] = true
    }
    
    return result
}

console.log(pairsWithSum([1, 3, 2, 2, 4, 0], 4));
