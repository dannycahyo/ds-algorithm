/*
You're given a string of available characters and a string representing a document that you need to generate. 
Write a function that determines if you can generate the document using the available characters. 
If you can generate the document, your function should return true; otherwise, it should return false.

You're only able to generate the document if the frequency of unique characters in 
the characters string is greater than or equal to the frequency of unique characters in the document string. 
For example, if you're given characters = "abcabc" and document = "aabbccc" you cannot generate the document because you're missing one c.

The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.

Note: you can always generate the empty string ("").

Sample Input
characters = "Bste!hetsi ogEAxpelrt x "
document = "AlgoExpert is the Best!"
Sample Output
true
*/

function generateDocument(characters: string, document: string) {
  const characterCount = new Map();

  for (const char of characters) {
    if (!characterCount.has(char)) {
      characterCount.set(char, 1);
    } else {
      characterCount.set(char, characterCount.get(char) + 1);
    }
  }

  for (const doc of document) {
    if (!characterCount.has(doc) || characterCount.get(doc) === 0) {
      return false;
    } else {
      characterCount.set(doc, characterCount.get(doc) - 1);
    }
  }

  return true;
}

const characters = "Bste!hetsi ogEAxpelrt x ";
const documents = "AlgoExpert is the Best!";

console.log(generateDocument(characters, documents));
