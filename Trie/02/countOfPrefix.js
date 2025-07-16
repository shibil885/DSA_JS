class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false;
        this.count = 0;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    add(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char]
            node.count++;
        }
        node.isEnd = true;
    }
    countPrefix(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) return 0
            node = node.children[char]
        }
        return node.count
    }
}

var prefixCount = function (words, pref) {
    let trie = new Trie();

    for (const word of words) {
        trie.add(word)
    }

    return trie.countPrefix(pref)

};
console.log(prefixCount(["pay", "attention", 'at', "practice", "attend"], pref = "at"));