/*


Given a string s consisting of words and spaces, 
return the length of the last word in the string.

A word is a maximal 
substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "

Output: 4
Explanation: The last word is "moon" with length 4.

Example: 3
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Pseudo Code: 
- Convert string nya menjadi sebuah array 
    ["Hello", "World"] 
- Ambil last index dari array nya
- Tinggal aku hitung length atau panjang array nya
*/

function countLengthOfLastWord(s) {
  s = s.trim();
  const arr = s.split(" ");
  const lastWord = arr.pop();
  return lastWord.length;
}

// function lengthOfLastWord(s) {
//   s = s.trim();

//   let len = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === " ") {
//       break;
//     }
//     len++;
//   }

//   return len;
// }

console.log(countLengthOfLastWord("   fly me   to   the moon  "));
