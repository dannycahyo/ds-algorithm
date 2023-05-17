/*








REVERSE ONLY LETTERS
https://leetcode.com/problems/reverse-only-letters/

Given a string s, reverse the string 
according to the following rules:

All the characters that are not English letters 
remain in the same position.
All the English letters (lowercase or uppercase) 
should be reversed.
Return s after reversing it.

EXAMPLE =>

Input: s = "ab-cd"
Output: "dc-ba"

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

*/

/* 
Please write a function that validates 
a character is english letters or not
*/
function isValidLetters(character: string): boolean {
  const regex = /^[A-Za-z]+$/;
  return regex.test(character);
}

function reverseOnlyLetters(s: string): string {
  let left = 0;
  let right = s.length - 1;
  let reverseStringArray: string[] = Array.from(s);

  while (left < right) {
    let leftChar = s[left];
    let rightChar = s[right];

    if (isValidLetters(leftChar) && isValidLetters(rightChar)) {
      reverseStringArray.splice(left, 1, rightChar);
      reverseStringArray.splice(right, 1, leftChar);
      left++;
      right--;
    } else if (!isValidLetters(leftChar)) {
      left++;
    } else if (!isValidLetters(rightChar)) {
      right--;
    }
  }

  const finalReverseString = reverseStringArray.join("");

  return finalReverseString;
}

console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
