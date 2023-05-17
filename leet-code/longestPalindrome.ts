/*





Given a string s which consists of lowercase
or uppercase letters, return the length of the
longest palindrome that can be built with those letters.

Letters are case sensitive, 
for example, "Aa" is not considered a palindrome here.

=========== EXAMPLES ==========================

VALID PALINDROMES
"kabak" => "kabak"

GA VALID PALINDROMES
"danny" => "ynnad"

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome
that can be built is "dccaccd", whose length is 7.

Input: s = "a"
Output: 1
Explanation: The longest palindrome 
that can be built is "a", whose length is 1.
*/

// function longestPalindrome(s: string): number {
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     const character = s[i];
//     if (map.has(character)) {
//       map.set(character, map.get(character) + 1);
//     } else {
//       map.set(character, 1);
//     }
//   }
//   const characters: string[] = [];
//   let uniqueCharacter = "";
//   for (const [key, value] of map) {
//     if (value % 2 === 0) {
//       for (let i = 0; i < value / 2; i++) {
//         characters.push(key);
//         characters.unshift(key);
//       }
//     }
//     if (value % 2 !== 0) {
//       uniqueCharacter = key;
//     }

//     for (let i = 0; i < value; i++) {
//       const mid = ~~(characters.length / 2);
//       characters[mid] = uniqueCharacter;
//     }
//   }

//   return characters.length;
// }

// function longestPalindrome(s: string): number {
//   const map = new Map();
//   let oddCount = 0;

//   for (let i = 0; i < s.length; i++) {
//     const character = s[i];
//     if (map.has(character)) {
//       map.set(character, map.get(character) + 1);
//     } else {
//       map.set(character, 1);
//     }
//   }

//   const characters: string[] = [];
//   for (const [key, value] of map) {
//     if (value % 2 === 0) {
//       for (let i = 0; i < value / 2; i++) {
//         characters.push(key);
//         characters.unshift(key);
//       }
//     } else {
//       oddCount++;
//       for (let i = 0; i < value - 1; i++) {
//         const mid = ~~(characters.length / 2);
//         characters[mid] = key;
//         characters.splice(mid, 0, key);
//       }
//     }
//   }

//   if (oddCount > 1) {
//     return characters.length - (oddCount - 1);
//   }

//   return characters.length;
// }

var longestPalindrome = function (s: string) {
  let map = new Map();
  let total = 0;
  let hasOdd = false;
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (const value of map.values()) {
    if (value % 2 === 0) {
      total += value;
    } else {
      total += value - 1;
      hasOdd = true;
    }
  }

  if (hasOdd) {
    total++;
  }

  return total;
};

console.log(longestPalindrome("aaabccccdd"));
