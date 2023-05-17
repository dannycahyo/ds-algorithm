/*



You are given an array of strings words and a string chars.

A string is good if it can be formed by characters
from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

============ EXAMPLE ===================
Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be 
formed are "cat" and "hat" so the answer is 3 + 3 = 6.


Input: words = ["hello","world","leetcode"], 
chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
*/

// Approach 2 => Hash Map

function countCharacters(words: string[], chars: string): number {
  let charMap = new Map();
  let totalLength = 0;

  for (let i = 0; i < chars.length; i++) {
    if (charMap.has(chars[i])) {
      charMap.set(chars[i], charMap.get(chars[i]) + 1);
    } else {
      charMap.set(chars[i], 1);
    }
  }

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordMap = new Map();
    let isGood = true;

    for (let j = 0; j < word.length; j++) {
      if (wordMap.has(word[j])) {
        wordMap.set(word[j], wordMap.get(word[j]) + 1);
      } else {
        wordMap.set(word[j], 1);
      }
    }

    for (let [key, value] of wordMap) {
      if (!charMap.has(key) || charMap.get(key) < value) {
        isGood = false;
        break;
      }
    }

    if (isGood) {
      totalLength += word.length;
    }
  }

  return totalLength;
}
const words = [
  "dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin",
  "ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb",
  "ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl",
  "boygirdlggnh",
  "xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx",
  "nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop",
  "hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx",
  "juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr",
  "lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo",
  "oxgaskztzroxuntiwlfyufddl",
  "tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp",
  "qnagrpfzlyrouolqquytwnwnsqnmuzphne",
  "eeilfdaookieawrrbvtnqfzcricvhpiv",
  "sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz",
  "yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue",
  "hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv",
  "cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo",
  "teyygdmmyadppuopvqdodaczob",
  "qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs",
  "qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs",
];

const chars = "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp";

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
