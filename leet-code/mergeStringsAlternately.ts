/*
You are given two strings word1 and word2. 
Merge the strings by adding letters in alternating order, 
starting with word1. If a string is longer than the other, 
append the additional letters onto the end of the merged string.

Return the merged string.


QUESTION TITLE => Merge Strings Alternately
https://leetcode.com/problems/merge-strings-alternately/
=========== EXAMPLE ===========

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, 
"rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer,
"cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d

PSUDO CODE ====================
Input: word1 = "abc", word2 = "pqr"

- Make a new string from the first word
- Give a space in each of the characters
    => "a b c"
- Looping through the max length of the word
- If the character is a space character
  - Replace the character with character dari word 2
- Return the new string
*/

function mergeAlternately(word1: string, word2: string): string {
  let finalString = "";
  const maxLengthOfWord = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLengthOfWord; i++) {
    const word1Char = word1[i] ?? "";
    const word2Char = word2[i] ?? "";
    finalString += word1Char + word2Char;
  }

  return finalString;
}

var mergeAlternately2 = function (word1: string, word2: string): string {
  let ans = "";
  let [max, min] =
    Math.min(word1.length, word2.length) == word1.length
      ? [word2, word1]
      : [word1, word2];
  for (let i = 0; i < min.length; i++) {
    ans += word1[i] + word2[i];
  }
  ans += max.slice(min.length, max.length);
  return ans;
};

var mergeAlternately3 = function (word1: string, word2: string): string {
  let result = "";

  while (word1.length !== 0 || word2.length !== 0) {
    result += word1[0] || "";
    result += word2[0] || "";
    if (word1.length) {
      word1 = word1.slice(1);
    }

    if (word2.length) {
      word2 = word2.slice(1);
    }
  }

  return result;
};

var mergeAlternately4 = function (word1: string, word2: string): string {
  const max = Math.max(word1.length, word2.length);
  let result = "";

  for (let i = 0; i < max; i++) {
    result += word1[i] || "";
    result += word2[i] || "";
  }

  return result;
};

console.log(mergeAlternately3("abcd", "pq"));
