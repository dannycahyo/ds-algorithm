/*
Given a string s and an integer k, 
reverse the first k characters for every 
2k characters counting from the start of the string.

If there are fewer than k characters left, 
reverse all of them. If there are less than 2k 
but greater than or equal to k characters, then reverse 
the first k characters and leave the other as original.


EXAMPLES 
================================================================

Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Input: s = "abcd", k = 2
Output: "bacd"


PSUED CODE:

https://leetcode.com/problems/reverse-string-ii/description/
*/

function reverseString2k(s: string, k: number): string {
  const arrayOfCharacters = s.split("");

  for (let i = 0; i < arrayOfCharacters.length; i += 2 * k) {
    let left = i;
    left;
    let right = i + k - 1;
    right;

    while (left < right) {
      if (arrayOfCharacters[right] === undefined) {
        right--;
        continue;
      }

      [arrayOfCharacters[left], arrayOfCharacters[right]] = [
        arrayOfCharacters[right],
        arrayOfCharacters[left],
      ];
      left++;
      right--;
    }
  }

  return arrayOfCharacters.join("");
}

console.log(reverseString2k("abcd", 4));
