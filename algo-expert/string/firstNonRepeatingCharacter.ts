/*
Write a function that takes in a string of lowercase English-alphabet letters and  returns the index of the string's first non-repeating character.

The first non-repeating character is the first character in a string that occurs only once.

If the input string doesn't have any non-repeating characters, your function should return -1.

Sample Input
string = "abcdcaf"

Sample Output
1 // The first non-repeating character is "b" and is found at index 1.


TIME COMPLEXITY  => O(N)
SPACE COMPLEXITY => O(1)
*/

function findFirstNonRepeatinChar(string: string): number {
  const characterMap = new Map();

  for (const char of string) {
    if (!characterMap.has(char)) {
      characterMap.set(char, 1);
    } else {
      characterMap.set(char, characterMap.get(char) + 1);
    }
  }

  let selectedChar;

  for (const [key, value] of characterMap) {
    if (value === 1) {
      selectedChar = key;
      break;
    }
  }

  return string.indexOf(selectedChar);
}

const inputString = "abcdcaf";

console.log(findFirstNonRepeatinChar(inputString));
