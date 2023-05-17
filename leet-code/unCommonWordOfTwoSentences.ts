/*

A sentence is a string of single-space separated
words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one
of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all 
the uncommon words. You may return the answer in any order.


EXAMPLE =>>>
Input: s1 = "this apple is sweet", 
s2 = "this apple is sour"
Output: ["sweet","sour"]


Input: s1 = "apple apple", 
s2 = "banana"
Output: ["banana"]

PSEUDO CODE ===> HASH MAP
{ this: 2, apple: 2, is: 2, sweet: 1, sour: 1 }
{ apple: 2, banana: 1 }

*/

function uncommonFromSentences(s1: string, s2: string): string[] {
  const map = new Map();
  const uncommonWords: string[] = [];

  const sentences = s1.split(" ").concat(s2.split(" "));

  sentences.forEach((word) => {
    map.set(word, (map.get(word) || 0) + 1);
  });

  map.forEach((value, key) => {
    if (value === 1) {
      uncommonWords.push(key);
    }
  });

  return uncommonWords;
}

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
