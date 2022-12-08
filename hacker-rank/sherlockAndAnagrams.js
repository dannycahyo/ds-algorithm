/*
Source => https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

Two strings are anagrams of each other if the letters of
one string can be rearranged to form the other string. 
Given a string, find the number of pairs of substrings 
of the string that are anagrams of each other.

Example => "Mom"

The list of all anagrammatic pairs is [m, m], [mo, om] 
at positions [[0],[2]] [[0][1], [1][2]] respectively.

Return => 2

Example => "abba"

The list of all anagrammatic pairs is [a, a], [b, b], [ab, ba]

Return => 4

Pseudo Code =>
- If the character is appear 2 times, I can count it => 1
- Slice the string by 1 and so on so forths, so it can be a,ab,abb, abba
- Then reverse the slice become => a, ab, abb, a

*/

// function sherlockAndAnagrams(s) {
//   const hashMap = new Map();
//   const anagram = [];
//   let countValidAnagram = 0;
//   const string = "djdhd";
//   console.log(string[0]);

//   for (let i = 0; i < s.length; i++) {
//     if (i === 0) {
//       anagram.push(s[0]);
//       hashMap.set(s[[0]], 1);
//     } else {
//       const slicedString = s.slice(i);
//       anagram.push(slicedString);
//       hashMap.set(slicedString, 1);
//     }
//   }

//   hashMap;

//   return countValidAnagram;
// }

const sum = (a) => a.reduce((sum, value) => sum + value, 0);
const counter = (s) => [...s].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {});

function allSubStrings(str) {
  let result = [];
  let len = str.length;
  for (let i = 0; i < len; i++)
    for (let j = i + 1; j <= len; j++) result.push(str.substring(i, j));

  return result;
}

const sorted = (s) => s.map((chars) => chars.split("").sort().join(""));

function sherlockAndAnagrams(s) {
  let subs = allSubStrings(s);
  subs;
  let sortedSubs = sorted(subs);
  sortedSubs;
  let counts = counter(sortedSubs);
  counts;
  let skips = Object.values(counts).filter((x) => x > 1);
  skips;
  let combi = skips.map((x) => (x * (x - 1)) / 2);
  combi;
  let num = sum(combi);
  return num;
}

console.log(sherlockAndAnagrams("mom"));
