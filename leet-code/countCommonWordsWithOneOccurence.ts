/*







Given two string arrays words1 and words2, 
return the number of strings that appear exactly 
once in each of the two arrays.

Input: words1 = ["leetcode","is","amazing","as","is"], 
words2 = ["amazing","leetcode","is"]
Count +1
Count +1
Output: 2
Explanation:
- "leetcode" appears exactly once in each of the two arrays. 
   We count this string.
- "amazing" appears exactly once in each of the two arrays. 
   We count this string.
- "is" appears in each of the two arrays, 
   but there are 2 occurrences of it in words1. 
   We do not count this string.
- "as" appears once in words1, but does not appear in words2. 
   We do not count this string.
   Thus, there are 2 strings that appear exactly once in 
   each of the two arrays.

Input: words1 = ["b","bb","bbb"], 
words2 = ["a","aa","aaa"]
Output: 0
Explanation: Ga ada kata yang sama di kedua array

Input: words1 = ["a","ab"], 
words2 = ["a","a","a","ab"]
Ada berapa banyak kata/string yang dia tuh muncul di kedua array
Output: 1
Explanation: The only string that appears 
exactly once in each of the two arrays is "ab".

Input: words1 = ["leetcode","is","amazing","as","is"], 
words2 = ["amazing","leetcode","is"]

Cari kata yang sama dan kemunculan nya hanya 1 kali 
di masing2 array

PSEUDO CODE: PASTIKAN DULU ALGORITMA MAU KITA PAKE

*/

// CODING QUESTION

function filterUniqueArray(array: string[]): string[] {
  const map = new Map();
  const newArray: string[] = [];

  array.forEach((value) => {
    if (!map.has(value)) {
      map.set(value, 1);
    } else {
      map.set(value, map.get(value) + 1);
    }
  });

  for (const [key, value] of map) {
    if (value <= 1) {
      newArray.push(key);
    }
  }

  return newArray;
}

function countWords(words1: string[], words2: string[]): number {
  let countWord = 0;
  const uniqueWords1 = filterUniqueArray(words1);
  const uniqueWords2 = filterUniqueArray(words2);

  uniqueWords1.forEach((word) => {
    if (uniqueWords2.includes(word)) {
      countWord++;
    }
  });

  return countWord;
}

console.log(countWords(["a", "ab"], ["a", "aa", "aaa"]));
