/*
You are given a 0-indexed array of string words
and two integers left and right.

A string is called a vowel string if it starts with a vowel
character and ends with a vowel character
where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

Return the number of vowel strings words[i]
where i belongs to the inclusive range [left, right].

Example:

Input: words = ["are","amy","u"], 
left = 0, right = 2
Output: 2
Explanation: 
- "are" is a vowel string because
  it starts with 'a' and ends with 'e'.
- "amy" is not a vowel string because
  it does not end with a vowel.
- "u" is a vowel string because
  it starts with 'u' and ends with 'u'.
The number of vowel strings in the mentioned range is 2.

Input: words = ["hey","aeo","mu","ooo","artro"], 
left = 1, right = 4
Output: 3
Explanation: 
- "aeo" is a vowel string 
 it starts with 'a' and ends with 'o'.
- "mu" is not a vowel string because
 it does not start with a vowel.
- "ooo" is a vowel string because
 it starts with 'o' and ends with 'o'.
- "artro" is a vowel string because
 it starts with 'a' and ends with 'o'.
The number of vowel strings in the mentioned range is 3.
*/

function vowelTest(s) {
  return /^[aeiou]$/i.test(s);
}

function isValidVowel(word) {
  const isStartWithVowel = vowelTest(word.charAt(0));
  const isEndWithVowel = vowelTest(word.charAt(word.length - 1));

  return isStartWithVowel && isEndWithVowel;
}

function countTheNumberOfVowels(words, left, right) {
  let countedVowelsString = 0;

  for (let i = left; i <= right; i++) {
    const word = words[i];
    if (isValidVowel(word)) {
      countedVowelsString++;
    }
  }

  return countedVowelsString;
}

console.log(countTheNumberOfVowels(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));
