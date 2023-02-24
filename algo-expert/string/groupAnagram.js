/*
  Write a function that takes in an array of strings and groups anagrams together.

  Anagrams are strings made up of exactly the same letters, where order doesn't
  matter. For example, "cinema"  and "iceman" or "foo"  and "ofo" are anagrams

  Your function should return a list of anagram groups in no particular order.

  Sample Input = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

  Sample Output = [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
*/

/*
Pseudo Code |>

- Loop through the array
- { "yo": true, "oy": true }
- Check each of the strings is the same like the others
- Push it onto the array
*/

const groupAnagrams = (words) => {
  const anagrams = {};

  for (const word of words) {
    const sortedWords = word.split("").sort().join("");

    if (sortedWords in anagrams) {
      anagrams[sortedWords].push(word);
    } else {
      anagrams[sortedWords] = [word];
    }
  }

  return Object.values(anagrams);
};

const groupAnagrams2 = (words) => {
  if (words.length === 0) return [];

  const sortedWords = words.map((word) => word.split("").sort().join(""));

  const indices = [...Array(words.length).keys()];

  indices.sort((a, b) => {
    if (sortedWords[a] < sortedWords[b]) return -1;
    else if (sortedWords[a] > sortedWords[b]) return 1;
    else return 0;
  });

  const result = [];
  let currentAnagramGroup = [];
  let currentAnagram = sortedWords[indices[0]];

  for (const index of indices) {
    const word = words[index];
    const sortedWord = sortedWords[index];
    if (sortedWord === currentAnagram) {
      currentAnagramGroup.push(word);
      continue;
    }
    result.push(currentAnagramGroup);
    currentAnagramGroup = [word];
    currentAnagram = sortedWord;
  }

  result.push(currentAnagramGroup);
  return result;
};

console.log(
  groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])
);
