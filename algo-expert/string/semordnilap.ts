/*
Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.

A semordnilap pair is defined as a set of different strings where the reverse of 
one word is the same as the forward version of the other. For example the words "diaper" and "repaid" 
are a semordnilap pair, as are the words "palindromes" and "semordnilap".

The order of the returned pairs and the order of the strings within each pair does not matter.

Sample Input
words = ["diaper", "abc", "test", "cba", "repaid"]

Sample Output
[["diaper", "repaid"], ["abc", "cba"]]
*/

function semordnilap(words: string[]) {
  const selectedWords: [string, string][] = [];
  const wordsSet = new Set(words);

  words.forEach((word) => {
    const reversedWord = word.split("").reverse().join("");
    if (wordsSet.has(reversedWord) && word !== reversedWord) {
      selectedWords.push([word, reversedWord]);
      wordsSet.delete(word);
      wordsSet.delete(reversedWord);
    }
  });

  return selectedWords;
}

const wordsInput = ["KOC", "COK", "bbbb"];

console.log(semordnilap(wordsInput));
