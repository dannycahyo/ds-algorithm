/*

A string s is nice if, for every letter of the alphabet 
that s contains, 
it appears both in uppercase and lowercase. 
For example, "abABB" is nice because 'A' and 'a' appear, 
and 'B' and 'b' appear. However, "abA" is not because 
'b' appears, but 'B' does not.

Given a string s, return the longest substring of s 
that is nice. If there are multiple, return the 
substring of the earliest occurrence. If there are none,
return an empty string.

========== EXAMPLE ==========

RETURN AND FIND NICE SUB STRING

Input: s = "YazaAay"
Output: "aAa"
Explanation: "aAa" is a nice string because 
'A/a' is the only letter of the alphabet in s, 
and both 'A' and 'a' appear.
"aAa" is the longest nice substring.

Input: s = "Bb"
Output: "Bb"
Explanation: "Bb" is a nice string because 
both 'B' and 'b' appear. The whole 
string is a substring.

Input: s = "c"
Output: ""
Explanation: There are no nice substrings.

PSEUDO CODE  =>   Hash Table

- Buat hash map
- Buat niceSubString 
- Looping ke string
 - Seragamkan si string nya ke lowercase
 - Nyimpan si huruf nya ke hash map
 - Kalo sebuah huruf nya tuh ada di hash map berturut turut
 - Simpan si huruf tersebut ke niceSubString
*/

function longestNiceSubstring(s: string): string {
  if (s.length <= 1) return "";

  for (let i = 0; i < s.length; i++) {
    const charLowerCase = s[i].toLowerCase();
    const charUpperCase = s[i].toUpperCase();
    if (s.includes(charLowerCase) && s.includes(charUpperCase)) {
      const substrings = s.split(s[i]);
      let longest = "";
      for (const substring of substrings) {
        const niceSubstring = longestNiceSubstring(substring);
        if (niceSubstring.length > longest.length) {
          longest = niceSubstring;
        }
      }
      return s[i] + longest + s[i];
    }
  }
  return "";
}

const s1 = "YazaAay";
const s2 = "Bb";
const s3 = "c";

console.log(longestNiceSubstring(s1)); // Output: "aAa"
console.log(longestNiceSubstring(s2)); // Output: "Bb"
console.log(longestNiceSubstring(s3)); // Output: ""
