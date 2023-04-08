/*



Given a string s, return the length of the longest 
substring between two equal characters,
excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.


EXAMPLE:
Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an 
empty substring between the two 'a's.

Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".

Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.


//  ==== Hash Map ======
- Mapping stringg nya jadi hash map 
  { a: 2, b: 1, c:1 }
- Looping lagi ke si string nya, 
  - If key nya tuh ada lagi, maka kita bakal stop
    dan return si substring nya
  - Kalo semisal key nya tuh ga ada 
    maka kita bakal store si string nya si sebuah set

*/

// function largestSubstring(s) {
//   const map = new Map();

//   for (let i = 0; i < s.length; i++) {
//     const character = s[i];
//     if (!map.has(character)) {
//       map.set(character, true);
//     } else {
//       map.delete(character);
//       break;
//     }
//   }

//   map

//   let finalSubstring = "";

//   for (const key of map.keys()) {
//     finalSubstring += key;
//   }

//   return finalSubstring.length || -1;
// }

function maxLengthBetweenEqualCharacters(s) {
  const map = {};
  let maxLen = -1;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = i;
    } else {
      maxLen = Math.max(maxLen, i - map[s[i]] - 1);
    }
  }

  return maxLen;
}

console.log(maxLengthBetweenEqualCharacters("jfdki"));
