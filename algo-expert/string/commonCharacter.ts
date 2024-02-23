/*






Common Characters
Write a function that takes in a non-empty list of non-empty strings and 
returns a list of characters that are common to all strings in the list, ignoring multiplicity.

Note that the strings are not guaranteed to only contain alphanumeric characters. 
The list you return can be in any order.

Sample Input
strings = ["abc", "bcd", "cbaccd"]
Sample Output
["b", "c"] // The characters could be ordered differently

BELAJAR DATA STRUCTURES & ALGORITHM
CATEGORY => STRING

{
    a: 2,
    b: 3,
    c: 6,
    d: 2
}
*/
function commonCharacters(strings: string[]): string[] {
  const stringSet = new Set<string>(strings[0]);

  for (const key of stringSet) {
    strings.forEach((string) => {
      if (!string.includes(key)) {
        stringSet.delete(key);
      }
    });
  }

  return Array.from(stringSet);
}

function commonCharacters2(strings: string[]): string[] {
  const selectedCharacter: string[] = [];
  const characterCount: { [character: string]: number } = {};

  for (const string of strings) {
    const uniqueStringChar = new Set(string);
    for (const character of uniqueStringChar) {
      if (!(character in characterCount)) {
        characterCount[character] = 0;
      }
      characterCount[character]++;
    }
  }

  const totalString = strings.length;

  for (const key in characterCount) {
    const totalCharacter = characterCount[key];
    if (totalCharacter >= totalString) {
      selectedCharacter.push(key);
    }
  }

  return selectedCharacter;
}

console.log(commonCharacters(["abc", "bcd", "cbaccd"]));
