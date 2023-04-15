/*

Given a string s and an array of strings words,
determine whether s is a prefix string of words.

A string s is a prefix string of words
if s can be made by concatenating 
the first k strings in words for some positive k 
no larger th  an words.length.

Return true if s is a prefix string of words,
or false otherwise.

Example 1:
Input: s = "iloveleetcode", 
words = ["i","love","leetcode","apples"]
Output: true
Explanation:
s can be made 
by concatenating "i", "love", and "leetcode" together.

Example 2:
Input: s = "iloveleetcode", 
words = ["apples","i","love","leetcode"]
Output: false
Explanation:
It is impossible to make s using a prefix of arr.

Example 3:
s = "dannyloves"
words ["loves", "danny", "her"]
false Output

Pseudo Code:

- Convert words itu jadi strings
- Check apakah si s itu merupakan prefix 
- Kalo semisal iya, aku return true
- Kalo semisal engga, aku return false
*/

function checkIFStringIsPrefix(s: string, words: string[]): boolean {
  let i = 0;

  for (const word of words) {
    if (!s.startsWith(word, i)) return false;
    i += word.length;
    if (i === s.length) return true;
  }

  return false;
}

console.log(
  checkIFStringIsPrefix("iloveleetcode", ["i", "love", "leetcode", "apples"])
);
