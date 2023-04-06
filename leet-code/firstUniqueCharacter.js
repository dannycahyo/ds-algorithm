/*



Given a string s, find the first non-repeating
character in it and return its index. 
If it does not exist, return -1.

Example:
Input: s = "leetcode"
Output: 0

Karena l unique dan index nya ke 0

Input: s = "loveleetcode"
Output: 2

Karena huruf v itu unique dan index nya ke 2


Input: s = "aabb"
Output: -1

Kalo gada huruf yang unique kita return -1;

Pseudo Code:
SOLUSI =>
HASH MAP ||| Hash Table || Object 
string  => "leetcode"
{  l: 1, e:3, t: 1, c: 1, o: 1, d: 1  }
string => "loveleetcode"
{ l: 2, o:2, v:1, e: 4, t:1, c: 1, d:1 }

- Mapping si string nya jadi Hash Map
- Menemukan huruf yang dia tuh kemunculan nya
  cuma 1 kali dan di urutan pertama


*/

function firstUniqueString(s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }

  for (const character of map.keys()) {
    const countedCharacter = map.get(character);
    if (countedCharacter === 1) {
      return s.indexOf(character);
    }
  }

  return -1;
}
const string = "hello";

console.log(firstUniqueString("aabb"));
