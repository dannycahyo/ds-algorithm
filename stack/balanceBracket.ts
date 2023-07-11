/*
Balanced Brackets
Write a function that takes in a string made up of brackets ((, [, {, ), ], and }) 
and other optional characters. The function should return 
a boolean representing whether the string is balanced with regards to brackets.

A string is said to be balanced if it has as many opening brackets of a certain type as it has closing brackets of that type and if no bracket is unmatched. Note that an opening bracket can't match a corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a corresponding opening bracket that comes after it. Also, brackets can't overlap each other as in [(]).

Sample Input
string = "([])(){}(())()()"
Sample Output
true // it's balanced
*/

function balancedBrackets(string: string): boolean {
  const brackets: string[] = [];
  const openingBrackets = "({[";
  const closingBrackets = ")}]";
  const matchingBracket = { "]": "[", "}": "{", ")": "(" };

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    if (openingBrackets.includes(bracket)) {
      brackets.push(bracket);
    } else if (closingBrackets.includes(bracket)) {
      if (brackets.length === 0) {
        return false;
      }

      if (brackets[brackets.length - 1] === matchingBracket[bracket]) {
        brackets.pop();
      } else {
        return false;
      }
    }
  }

  return brackets.length === 0;
}

console.log(balancedBrackets("([])(){}(())()()"));
