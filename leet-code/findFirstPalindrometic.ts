/*


Given an array of strings words, return the first
palindromic string in the array. 
If there is no such string, return an empty string "".

A string is palindromic if it reads the
same forward and backward.

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, 
but it is not the first.

Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".

Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, 
so the empty string is returned.

Pseudo Code:
- Looping ke array nya u/ cek masing2 string
- Cek apakah string tersebut itu adalah palindromic
- Convert string nya jadi array
- Reverse string nya itu
- Bandingkan original string nya sama string yang dibalik
  Kalo semisal ada  => Return string tersebut
  Kalo semisal gada => Return string kosong

*/

/* BIG O Notation
Time Complexity => O(N2)
*/
function isPalindromicString(word: string): boolean {
  let reverseString = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reverseString += word[i];
  }

  return word === reverseString;
}
function findFirstPalindromicArray(words: string[]): string {
  for (const word of words) {
    if (isPalindromicString(word)) {
      return word;
    }
  }

  return "";
}

console.log(findFirstPalindromicArray(["notapalindrome", "racecar"]));
