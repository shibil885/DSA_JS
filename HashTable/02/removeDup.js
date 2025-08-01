function removeDuplicate(str) {
    let hashMap = new Map();
    let result = ''
    for (const char of str) {
        if (!hashMap.has(char)) {
            hashMap.set(char, (hashMap.get(char) || 0) + 1);
            result+= char
        }
    }
    console.log(hashMap);
    
    return result
}
console.log(removeDuplicate('shibilshibil'));
