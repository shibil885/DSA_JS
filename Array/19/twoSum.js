function twoSum(array, target) {
    let hashMap = new Map();
    for (let i = 0; i < array.length; i++) {
        let complement = target - array[i];
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), i];
        }
        hashMap.set(array[i], i);
    }
    return []
}

console.log(twoSum([1,2,3,4,5],6));
