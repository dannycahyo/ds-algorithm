var TrieNode = /** @class */ (function () {
    function TrieNode() {
        var ASCII_SIZE = 256;
        this.Trie = new Array(ASCII_SIZE).fill(null);
        this.isEnd = false;
    }
    return TrieNode;
}());
function insertTrie(root, s) {
    var temp = root;
    for (var i = 0; i < s.length; i++) {
        if (temp.Trie[s.charCodeAt(i)] == null) {
            // Initialize a node
            temp.Trie[s.charCodeAt(i)] = new TrieNode();
        }
        temp = temp.Trie[s.charCodeAt(i)];
    }
    // Mark the last character of
    // the string to true
    temp.isEnd = true;
}
function printSuggestions(root, res) {
    // If current character is
    // the last character of a string
    if (root.isEnd) {
        console.log(res);
    }
    // Iterate over all possible
    // characters of the string
    for (var i = 0; i < 256; i++) {
        // If current character
        // present in the Trie
        if (root.Trie[i] != null) {
            // Insert current character
            // into Trie
            var res_list = res.split("");
            res_list.push(String.fromCharCode(i));
            printSuggestions(root.Trie[i], res_list.join(""));
        }
    }
}
function checkPresent(root, key) {
    for (var i = 0; i < key.length; i++) {
        // If current character not
        // present in the Trie
        if (root.Trie[key.charCodeAt(i)] == null) {
            printSuggestions(root, key.substr(0, i));
            return false;
        }
        root = root.Trie[key.charCodeAt(i)];
    }
    if (root.isEnd) {
        return true;
    }
    printSuggestions(root, key);
    return false;
}
var strings = ["danny", "danny dwi", "danny dwi cahyono"];
var keyword = "danny";
var root = new TrieNode();
for (var i = 0; i < strings.length; i++) {
    insertTrie(root, strings[i]);
}
if (checkPresent(root, keyword)) {
    console.log("YES");
}
