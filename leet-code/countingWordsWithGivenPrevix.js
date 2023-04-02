/*


Questions => Counting Words With a Given Prefix

You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.

Exmaple:
Input: words = ["pay","attention","practice","attend"], 
pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

Input: words = ["leetcode","win","loops","success"], 
pref = "code"
Output: 0
Explanation: There are no strings that contain "code" as a prefix.

Pseudo Code:
- Buat variable countedWord
- Looping ke array nya, 
    untuk dapeting semua string yang ada di array
- Buat kondisi apakah string tersebut itu tuh berawal dari prefix
  - If true, maka kita bisa tanbah 1 si varible countedWord
  - If false, kita ga bakal tambah
*/

function countWordsWithPrefix(words, pref) {
  let countedWord = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const isAccordingPrefix = word.startsWith(pref);
    if (isAccordingPrefix) {
      countedWord++;
    }
  }

  return countedWord;
}

const result = countWordsWithPrefix(
  ["leetcode", "win", "loops", "success"],
  "code"
);

console.log(result);
