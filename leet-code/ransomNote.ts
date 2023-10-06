/*





Given two strings ransomNote and magazine, 
return true if ransomNote can be constructed 
by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineMap = new Map<string, number>();
  for (const char of magazine) {
    if (magazineMap.has(char)) {
      magazineMap.set(char, magazineMap.get(char) + 1);
    } else {
      magazineMap.set(char, 1);
    }
  }

  for (const char of ransomNote) {
    if (magazineMap.has(char)) {
      const count = magazineMap.get(char);
      if (count === 1) {
        magazineMap.delete(char);
      } else {
        magazineMap.set(char, count - 1);
      }
    } else {
      return false;
    }
  }

  return true;
}

console.log(canConstruct("aa", "aab"));
