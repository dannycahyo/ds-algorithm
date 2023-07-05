/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

strs = ["luffy", "lufio", "lufoyo"]
Output: "luf"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

//  HASH MAP || HASH TABLE || OBJECT

{
    f: 3,
    l: 3
    o: 2
    i: 1
    w: 2
}
*/

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  let commonPrefix = "";
  const firstString = strs[0];

  for (let i = 0; i < firstString.length; i++) {
    const character = firstString[i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== character) {
        return commonPrefix;
      }
    }

    commonPrefix += character;
  }

  return commonPrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["luffy", "lufio", "lufoyo"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["aa", "aa"]));
