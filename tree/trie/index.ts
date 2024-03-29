class TrieNode {
  Trie: Array<TrieNode | null>;
  isEnd: boolean;

  constructor() {
    const ASCII_SIZE = 256;
    this.Trie = new Array<TrieNode | null>(ASCII_SIZE).fill(null);
    this.isEnd = false;
  }
}

function insertTrie(root: TrieNode, s: string): void {
  let temp = root;

  for (let i = 0; i < s.length; i++) {
    if (temp.Trie[s.charCodeAt(i)] == null) {
      // Initialize a node
      temp.Trie[s.charCodeAt(i)] = new TrieNode();
    }

    temp = temp.Trie[s.charCodeAt(i)]!;
  }

  // Mark the last character of
  // the string to true
  temp.isEnd = true;
}

function printSuggestions(root: TrieNode, res: string): void {
  if (root.isEnd) {
    console.log(res);
  }

  for (let i = 0; i < 256; i++) {
    if (root.Trie[i] != null) {
      let resList = res.split("");
      resList.push(String.fromCharCode(i));

      printSuggestions(root.Trie[i]!, resList.join(""));
    }
  }
}

function checkPresent(root: TrieNode, key: string): boolean {
  for (let i = 0; i < key.length; i++) {
    // If current character not
    // present in the Trie
    if (root.Trie[key.charCodeAt(i)] == null) {
      printSuggestions(root, key.substr(0, i));
      return false;
    }

    root = root.Trie[key.charCodeAt(i)]!;
  }

  if (root.isEnd) {
    return true;
  }

  printSuggestions(root, key);
  return false;
}

const strings = ["cat", "cattle", "category", "casting", "cast"];

const keyword = "c";

const root = new TrieNode();

for (let i = 0; i < strings.length; i++) {
  insertTrie(root, strings[i]);
}

if (checkPresent(root, keyword)) {
  console.log("YES");
}
