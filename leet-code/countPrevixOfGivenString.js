/* 
Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
Output: 3
Explanation:
The strings in words which are a prefix of s = "abc" are:
"a", "ab", and "abc".
Thus the number of strings in words which are a prefix of s is 3.

Input: words = ["a","a"], s = "aa"
Output: 2
Explanation:
Both of the strings are a prefix of s. 
Note that the same string can occur multiple times in words, and it should be counted each time.

Pseudo Code 
  - Traverse throgh the array of strings
  - Check for every single string in the array is a prefix of "s"
   - 
*/

const countPrefixes = (words, s) => {
  let countPrevix = 0;

  words.forEach((word) => {
    if (s.startsWith(word)) countPrevix++;
  });

  return countPrevix;
};

console.log(countPrefixes(["a", "a"], "aa"));
