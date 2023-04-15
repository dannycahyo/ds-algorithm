/*


Example:

Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), 
the resulting string is "dcbaefd".

Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
Explanation: 
The first and only occurrence of "z" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), 
the resulting string is "zxyxxe".

Input: word = "abcd", ch = "z"
Output: "abcd"
Explanation: "z" does not exist in word.
You should not do any reverse operation, 
the resulting string is "abcd".
*/

function reverseStringBasedOnCha(word, ch) {
  let finalString = "";
  const chIndex = word.indexOf(ch);

  for (let i = chIndex; i >= 0; i--) {
    const character = word[i];
    finalString += character;
  }

  const restOfTheString = word.slice(chIndex + 1);

  return finalString.concat(restOfTheString);
}

console.log(reverseStringBasedOnCha("abcd", "z"));
