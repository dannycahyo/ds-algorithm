interface TrieNode {
  [key: string]: TrieNode | boolean;
}

export class SuffixTrie {
  root: TrieNode;
  endSymbol: string;

  constructor(string: string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string: string) {
    for (let i = 0; i < string.length; i++) {
      let node = this.root;
      for (let j = i; j < string.length; j++) {
        const letter = string[j];
        if (!(letter in node)) node[letter] = {};
        node = node[letter] as TrieNode;
      }
      node[this.endSymbol] = true;
    }
  }

  contains(string: string) {
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) return false;
      node = node[letter] as TrieNode;
    }
    return this.endSymbol in node;
  }
}

const suffixTrie = new SuffixTrie("babc");
console.log(suffixTrie.contains("abc")); // true
