/*
Given a string s containing just the characters
'(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

'(', ')', '{', '}', '[' and ']',

Example:
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false
*/

function isValidParantheses(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const parantheses = s[i];

    // Kondisi kalo si string nya kurung pembuka
    if (parantheses === "(") {
      stack.push(")");
    } else if (parantheses === "[") {
      stack.push("]");
    } else if (parantheses === "{") {
      stack.push("}");
      //   Kondisi ketika kita dihadapkan sama kurung penutup
    } else if (stack.pop() !== parantheses) {
      return false;
    }
  }

  return !stack.length;
}

console.log(isValidParantheses("((()))"));
