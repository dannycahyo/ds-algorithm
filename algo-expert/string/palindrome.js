/*

  Write a function that takes in a non-empty string and that returns a boolean
  representing whether the string is a palindrome.

  A palindrome is defined as a string that's written the same forward and
  backward. Note that single-character strings are palindromes.

   Sample Input = "abcdcba"

   Output => True
*/

// Using Pointer
function palindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    const leftChar = string.charAt(left);
    const rightChar = string.charAt(right);

    if (leftChar === rightChar || left === right) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}

// Brute Force || O(n2) Time Complexity O(n) Space Complexity
function palindrome2(string) {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString === string;
}

// Converting to Array || O(n) Time Complexity O(n) Space Complexity
function palindrome3(string) {
  let reversedString = [];

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  }

  return string === reversedString.join("");
}

// Using Recursion || O(n) Time Complexity O(n) Space Complexity
function palindrome4(string, i = 0) {
  const j = string.length - 1 - i;
  return i >= j ? true : string[i] === string[j] && palindrome4(string, i + 1);
}

function palindrome5(string) {
  if (string.length < 2) return true;

  const firstChar = string.charAt(0);
  const lastChar = string.charAt(string.length - 1);

  if (firstChar === lastChar) {
    return palindrome5(string.substring(1, string.length - 1));
  }
}

console.log(palindrome5("abcdcba"));
