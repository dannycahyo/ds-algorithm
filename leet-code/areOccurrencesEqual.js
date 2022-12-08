/*
Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same
number of occurrences (i.e., the same frequency).

Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. 
All characters occur 2 times in s.

Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
*/

const areOccurrencesEqual = function (s) {
  const countedCharacters = [];
  const hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      hashMap.set(s[i], hashMap.get(s[i]) + 1);
    } else {
      hashMap.set(s[i], 1);
    }
  }

  for (const value of hashMap.values()) {
    countedCharacters.push(value);
  }

  return countedCharacters.every((num) => countedCharacters[0] === num);
};

console.log(areOccurrencesEqual("aaabb"));
