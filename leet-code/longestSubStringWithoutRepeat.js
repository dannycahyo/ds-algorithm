/*
Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

================================================================
Requirements:
- The next number should not be equal to the previous number.
- If the next number is already exist in the map, then we're not gonna count it.


Pseudo Code
- Init hash map
- Looping through the string
*/

function longestSubStringWithoutRepeat(s) {
  const map = new Map();
  let left = 0;
  let maxSize = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    while (map.has(s[i])) {
      map.delete(s[left]);
      left++;
    }

    map.set(s[i]);
    maxSize = Math.max(maxSize, i - left + 1);
    i;
    left;
    maxSize;
  }

  map;

  return maxSize;
}

console.log(longestSubStringWithoutRepeat("abbcdb"));
