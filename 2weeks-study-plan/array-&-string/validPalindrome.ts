/*
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

function validPalindrome(s: string): boolean {
  const regex = /^[a-zA-Z0-9]+$/;
  let reversedString = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (regex.test(s[i])) {
      reversedString += s[i];
    }
  }

  let convertedString = "";

  for (let i = 0; i < s.length; i++) {
    if (regex.test(s[i])) {
      convertedString += s[i];
    }
  }

  return reversedString.toLowerCase() === convertedString.toLowerCase();
}

// Using Two POinter

var isPalindrome = function (s: string) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (!isAlphaNumeric(s[left])) left++;
    else if (!isAlphaNumeric(s[right])) right--;
    else if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    else {
      left++;
      right--;
    }
  }
  return true;
};

function isAlphaNumeric(char: string) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
