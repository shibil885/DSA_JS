

/**
 * Q -> Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 */


    function isAnagram(str1, str2) {
        if (str1.length !== str2.length) return false
        let count = {}
        for (const char of str1) {
            count[char] = (count[char] || 0) + 1
        }
        for (const char of str2) {
            if (!count[char]) return false;
            count[char]--;
        }
        return true
    }