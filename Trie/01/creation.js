class TrieNode {
    constructor() {
        this.children = {};
        this.isEndWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    add(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndWord = true
    }

    search(prefix) {
        let node = this.root;

        for (const char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }

}

let trie = new Trie()
trie.add('shibil')
console.log(trie.search('sh'));

// console.log(JSON.stringify(trie));
