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

function swap(arr, i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i++] = arr[j];
    arr[j--] = temp;
  }
}

var reverseStr = function (s, k) {
  let arr = s.split("");
  let i = 0;
  while (i < arr.length) {
    let j = Math.min(i + k - 1, arr.length - 1);
    swap(arr, i, j);
    i += 2 * k;
  }
  return arr.join("");
};

var reverseStr2 = function (s, k) {
  let p1 = 0,
    p2 = p1 + k - 1,
    inc = 1,
    ans = "";
  while (p2 < s.length) {
    if (p2 >= p1) {
      ans += s[p2];
      p2--;
    } else {
      console.log(s.slice(k * inc * 2 - k, k * inc * 2));
      ans += s.slice(k * inc * 2 - k, k * inc * 2);
      inc++;
      p1 = k * inc + k - k;
      p2 = p1 + k - 1;
    }
  }
  return ans;
};

console.log(reverseStr2("abcdefg", 3));

// Object

const student = {
  name: "John",
  age: 23,
  brother: {
    name: "Jake",
    age: 25,
  },
  hobbies: ["Sports", "Cooking"],
};

// Function
// const six = 3 * 2;
// const eight = 4 * 2;

function multiplyBy2(num) {
  return num * 2;
}

const six = multiplyBy2(3);
const eight = multiplyBy2(4);
