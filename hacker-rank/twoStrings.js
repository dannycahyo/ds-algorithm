/*
Given two strings, determine if they share a common substring. 
A substring may be as small as one character.

Example:

s1 = "and"
s2 = "art"

These share the common substring a.

s1 = "be"
s2 = "cat"

These not share the common substring.

Returns

string: either YES or NO

================================
PSEUDO Code
- Init hash map
- Looping through the first string and set it to the hash map
- Looping through the second string and check
    - If the character is in the hash map, then we can return YES
    - If it's not just return NO
*/

function twoStrings(s1, s2) {
  const map = new Map();
  let result = "NO";

  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], 1);
  }

  for (let j = 0; j < s2.length; j++) {
    if (map.has(s2[j])) {
      result = "YES";
    }
  }

  return result;
}

console.log(twoStrings("hello", "world"));
