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

function groupAnagrams(strs: string[]): string[] {
  const map = {};
  const anagrams: string[] = [];

  strs.forEach((str) => {
    const word = str.split("").sort().join("");
    if (word in map) {
      map[word].push(str);
    } else {
      map[word] = [str];
    }
  });

  for (const key in map) {
    anagrams.push(map[key]);
  }

  return anagrams;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
