/*

Find Resultant Array After Removing Anagram
https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/





STRING ANAGRAMS

For example, "dacb" is an anagram of "abdc".


Input: words = ["abba","baba","bbaa","cd","cd"]
Output: ["abba","cd"]
Explanation:
One of the ways we can obtain the resultant array 
is by using the following operations:
- Since words[2] = "bbaa" and words[1] = "baba" are anagrams, 
we choose index 2 and delete words[2].
  Now words = ["abba","baba","cd","cd"].
- Since words[1] = "baba" and words[0] = "abba" are anagrams, 
we choose index 1 and delete words[1].
  Now words = ["abba","cd","cd"].
- Since words[2] = "cd" and words[1] = "cd" are anagrams, 
we choose index 2 and delete words[2].
  Now words = ["abba","cd"].
We can no longer perform any operations, so ["abba","cd"] 
is the final answer.

Input: words = ["a","b","c","d","e"]
Output: ["a","b","c","d","e"]
Explanation:
No two adjacent strings in words are anagrams of each other, so no operations are performed.
*/

function cerializeWordToAnagram(word: string): string {
  return word.split("").sort().join(" ");
}

function removeAnagrams(words: string[]): string[] {
  const map = new Map();

  words.forEach((word) => {
    const anagramWord = cerializeWordToAnagram(word);
    if (map.has(anagramWord)) {
      map.set(anagramWord, map.get(anagramWord) + 1);
    } else {
      map.set(anagramWord, 1);
    }
  });

  words.forEach((word) => {
    const anagramWord = cerializeWordToAnagram(word);
    if (map.has(anagramWord)) {
      map.set(anagramWord, map.get(anagramWord) - 1);
    }
  });

  return Array.from(map, ([key]) => key);
}

console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]));
