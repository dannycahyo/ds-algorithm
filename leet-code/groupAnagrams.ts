/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, 
typically using all the original letters exactly once.


Example:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: strs = [""]
Output: [[""]]

Input: strs = ["a"]
Output: [["a"]]
*/

// TIME COMPLEXITY => O(N)
// SPACE COMPLEXITY => O(N)
function groupAnagrams(strs: string[]) {
  const map = new Map();

  strs.forEach((string) => {
    const anagramWord = string.split("").sort().join("");

    if (!map.has(anagramWord)) {
      map.set(anagramWord, [string]);
    } else {
      const prevMapValue = map.get(anagramWord);
      map.set(anagramWord, [...prevMapValue, string]);
    }
  });

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
