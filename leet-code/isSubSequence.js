/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting 
some (can be none) of the characters without disturbing the relative positions of the remaining 
characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


Input: s = "abc", t = "ahbgdc"
Output: true

Input: s = "axc", t = "ahbgdc"
Output: false

Pseudo Code
- Looping through a string
- Checks wether the characters of substring exist
    - If it's right there, then we keep
    - If it's not there, then we can delete it
*/

function isSubSequence(s, t) {
  let subsequence = "";

  for (let i = 0; i < t.length; i++) {
    if (s.includes(t[i])) {
      subsequence += t[i];
    }
  }

  subsequence;

  return subsequence === s;
}

function isSubSequence2(s, t) {
  let sequencePointer = 0;
  let stringPointer = 0;

  while (sequencePointer < s.length && stringPointer < t.length) {
    if (s[sequencePointer] === t[stringPointer]) {
      sequencePointer++;
    } else {
      stringPointer++;
    }
  }
  sequencePointer;

  return sequencePointer === s.length;
}

function isSubSequence3(s, t) {
  let sequencePointer = 0;

  for (let i = 0; i < t.length; i++) {
    if (sequencePointer === s.length) break;
    if (s[sequencePointer] === t[i]) sequencePointer++;
  }

  return sequencePointer === s.length;
}

console.log(isSubSequence3("aaaaaa", "bbaaaa"));
