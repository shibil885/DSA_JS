function longNoneRpStr(str) {
    let start = 0;
    let maxLen = 0;
    let seen = new Map();
    let longest = ''
    for (let i = 0; i < str.length; i++) {
        if (seen.has(str[i])) {
            start = Math.max(seen.get(str[i]) + 1, start);
        }

        seen.set(str[i], i);

        if (i - start + 1 > maxLen) {
            maxLen = i - start + 1;
            longest = str.slice(start, i + 1);
        }
    }
    return longest
}

console.log(longNoneRpStr('aabbccc'))

'ffabcdeef';
let start = 0;
let maxLen = 1;
let longest = 'f'
seen = {
    f: 1,
    a: 2
}