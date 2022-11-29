/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]


Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

================================================================
Pseudo Code

Solution 1 => Use the array method

Solution 2 => Using two pointers
*/

function reverseString(s) {
  return s.reverse();
}

function reverseString2(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
}

console.log(reverseString2(["h", "e", "l", "l", "o"]));
// left = 0 right = 3
// left = 1 right = 2
// left = 2 right = 1
