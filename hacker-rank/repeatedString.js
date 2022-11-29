/*
There is a string, s , of lowercase English letters that is repeated infinitely many times. 
Given an integer, n , find and print the number of letter a's in the first  letters of the infinite string.

Example

The substring we consider is abcacabcac, the first  characters of the infinite string. 
There are 4 occurrences of a in the substring.
*/

function repeatedString(s, n) {
  let coun1str = 0;
  for (let letter of s) {
    if (letter === "a") {
      coun1str += 1;
    }
  }
  coun1str;
  const div = Math.floor(n / s.length);
  div;
  const rest = n % s.length;
  rest;
  let result = coun1str * div;
  result;
  if (rest === 0) return result;
  else {
    for (let i = 0; i < rest; i++) {
      if (s[i] === "a") {
        result += 1;
      }
    }
  }
  return result;
}

console.log(repeatedString("abaabaabaa", 10));
