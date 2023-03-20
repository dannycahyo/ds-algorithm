/*
You are given a 0-indexed string array words.

Two strings are similar if they consist of the same characters.

For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

Example:
Input: words = ["aba","aabb","abcd","bac","aabc"]
Output: 2
Explanation: There are 2 pairs that satisfy the conditions:
- i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'. 
- i = 3 and j = 4 : both words[3] and words[4] only consist of characters 'a', 'b', and 'c'. 

Input: words = ["aabb","ab","ba"]
Output: 3
Explanation: There are 3 pairs that satisfy the conditions:
- i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'. 
- i = 0 and j = 2 : both words[0] and words[2] only consist of characters 'a' and 'b'.
- i = 1 and j = 2 : both words[1] and words[2] only consist of characters 'a' and 'b'.

Input: words = ["nba","cba","dba"]
Output: 0
Explanation: Since there does not exist any pair that satisfies the conditions, we return 0.

Psuedo Code:
 - Init the counter
 - Init Set
 - Looping through the array of words
 - Make each of the word become unique
 
 - Init hash map
 - Looping through the array of words
 - If the word is doens't exist in the hash map then we're gonna set it
 - If the word is is the hash map then we can increment the counter
*/

function filterWord(word) {
  const uniqueWord = new Set(...word);
  return Array.from(uniqueWord).sort().toString();
}

const countOfSimilarStrings = (words) => {
  let counter = 0;

  const map = new Map();

  words.forEach((word) => {
    const uniqueWord = filterWord([word]);
    uniqueWord;
    console.log(map.has(uniqueWord));
    if (map.has(uniqueWord)) {
      counter++;
    } else {
      map.set(uniqueWord, true);
    }
  });

  return counter;
};
console.log(countOfSimilarStrings(["aabb", "ab", "ba"])); // 2

function hasSameChar(string1, string2) {
  const charSet1 = new Set(string1.split(""));
  const charSet2 = new Set(string2.split(""));

  for (const char of charSet1) {
    if (!charSet2.has(char)) return false;
  }

  for (const char of charSet2) {
    if (!charSet1.has(char)) return false;
  }

  return true;
}

function similarPairs(words) {
  let counter = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (hasSameChar(words[i], words[j])) counter++;
    }
  }

  return counter;
}
