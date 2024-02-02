/*
You're given two strings stringOne and stringTwo. Write a function that determines if these two strings can be made equal using only one edit.

There are 3 possible edits:

- Replace: One character in one string is swapped for a different character.
- Add: One character is added at any index in one string.
- Remove: One character is removed at any index in one string.

Note that both strings will contain at least one character. If the strings are the same, your function should return true.
*/

function oneEdit(str1: string, str2: string): boolean {
  if (str1 === str2) return true;
  const lengthStr1 = str1.length;
  const lengthStr2 = str2.length;
  if (Math.abs(lengthStr1 - lengthStr2) > 1) return false;

  for (let i = 0; i < Math.min(lengthStr1, lengthStr2); i++) {
    if (str1[i] !== str2[i]) {
      if (lengthStr1 > lengthStr2) {
        return str1.slice(i + 1) === str2.slice(i);
      } else if (lengthStr2 > lengthStr1) {
        return str2.slice(i + 1) === str1.slice(i);
      } else {
        return str1.slice(i + 1) === str2.slice(i + 1);
      }
    }
  }

  return true;
}

const str1 = "b"; // add o
const str2 = "ab";

console.log(oneEdit(str1, str2));
