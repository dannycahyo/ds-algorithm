/*

There is a malfunctioning keyboard where some 
letter keys do not work. All other keys on 
the keyboard work properly.

Given a string text of words separated by a single 
space (no leading or trailing spaces) and a string 
brokenLetters of all distinct letter keys that are 
broken, return the number of words in text you 
can fully type using this keyboard.

Input: text = "hello world", brokenLetters = "ad"
Output: 1
Explanation: We cannot type "world" 
because the 'd' key is broken.

Input: text = "leet code", brokenLetters = "lt"
Output: 1
Explanation: We cannot type "leet" because 
the 'l' and 't' keys are broken.

Input: text = "leet code", brokenLetters = "e"
Output: 0
Explanation: We cannot type either word because 
the 'e' key is broken.

PSUEDO CODE ============== HASH MAP
- Bikin variable buat tracking si kata yang bisa diketik => udah
- Split the string into array ["hello", "world"] => udah
- Bikin hash map untuk brokenLetters  => udah
    { a: true, d: true }
- Looping through the array untuk mendapatkan masing2 kata
- Ngecek keseluruhan isi kata nya 
    - Kalo semisal isi katanya itu tidak 
    terdiri dari brokenLettes maka aku bakal hitung kata tersebut
*/

function canBeTypedWords(text: string, brokenLetters: string): number {
  let validWords = 0;
  const words = text.split(" ");
  if (brokenLetters.length === 0) {
    return words.length;
  }
  const map = new Map();
  for (let i = 0; i < brokenLetters.length; i++) {
    const brokenLetter = brokenLetters[i];
    map.set(brokenLetter, true);
  }
  words.forEach((word) => {
    let notValidWord = false;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (map.has(letter)) {
        notValidWord = true;
      }
    }
    if (!notValidWord) {
      validWords++;
    }
  });

  return validWords;
}

var canBeTypedWords2 = function (text: string, brokenLetters: string): number {
  const words = text.split(" ");
  words;
  const regexString = brokenLetters.split("").join("|");
  regexString;
  const regexExp = new RegExp(regexString);
  regexExp;

  if (brokenLetters.length === 0) {
    return words.length;
  }

  let possibleWordCount = 0;

  words.forEach((word) => {
    if (!regexExp.test(word)) {
      possibleWordCount++;
    }
  });

  return possibleWordCount;
};

var canBeTypedWords3 = function (text: string, brokenLetters: string): number {
  const regex = `[${brokenLetters}]`;
  regex;
  let words = text.split(" ");
  words;
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let valid = true;
    if (words[i].match(regex)) {
      valid = false;
    }

    if (valid) {
      count++;
    }
  }

  return count;
};

var canBeTypedWords4 = function (text: string, brokenLetters: string): number {
  const bl = {};

  for (let i = 0; i < brokenLetters.length; i++) {
    bl[brokenLetters[i]] = 1;
  }

  let isBroken = false;
  let total = 0;

  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    if (bl[text[i]]) {
      isBroken = true;
    }

    if (text[i] === " " || text.length - 1 === i) {
      if (isBroken) {
        isBroken = false;
      } else {
        total++;
      }
    }
  }

  return total;
};

console.log(canBeTypedWords4("leet code", "lt"));
