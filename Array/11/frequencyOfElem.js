function frequency(arr) {
    let hashMap = {};

    for (const element of arr) {
       hashMap[element] = (hashMap[element] || 0) +1
    }
    return hashMap
    
}

console.log(frequency([1,2,1,2,3,3,4,4,5,1,6,5,6]));
