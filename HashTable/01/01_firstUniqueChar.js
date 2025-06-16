/**
 * Q -> Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * Input: s = "leetcode"
 * Output: 0
 * Explanation:
 * The character 'l' at index 0 is the first character that does not occur at any other index.
*/

function firstUniqChar(s) {
    let hash = {};
    for (let i of s) {
        hash[i] = (hash[i] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === 1) {
            return i;
        }
    }
    return -1
};