/*
Longest Balanced Substring
Write a function that takes in a string made up of parentheses (( and )). The function should return an integer representing the length of the longest balanced substring with regards to parentheses.

A string is said to be balanced if it has as many opening parentheses as it has closing parentheses and if no parenthesis is unmatched. Note that an opening parenthesis can't match a closing parenthesis that comes before it, and similarly, a closing parenthesis can't match an opening parenthesis that comes after it.

Sample Input
string = "(()))("
Sample Output
4 // The longest balanced substring is "(())".
 */

export function longestBalancedSubstring(string: string) {
  let maxLength = 0;

  const stack: number[] = [];
  stack.push(-1);

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();

      if (stack.length === 0) {
        stack.push(i);
      } else {
        const currentLength = i - stack[stack.length - 1];
        maxLength = Math.max(maxLength, currentLength);
      }
    }
  }

  return maxLength;
}

console.log(longestBalancedSubstring("(()))("));
