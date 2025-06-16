/**
 * Q -> Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * Input: s = "()"
 * Output: true
*/

function isValidParentheses(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else {
            if (stack.pop() !== char) return false;
        }
    }

    return stack.length === 0;
}
