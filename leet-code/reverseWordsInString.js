/*
Given a string s, reverse the order of characters in each word within
a sentence while still preserving whitespace and initial word order

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Input: s = "God Ding"
Output: "doG gniD"

Pseudo Code
- Split the string into array 
- Looping through the array
- Reverse each word
- Convert the array become string
*/

function reverseWordsInString(s) {
  const characters = s.split(" ");

  characters.forEach((character, i) => {
    characters[i] = character.split("").reverse().join("");
  });

  return characters.join(" ");
}

function reverseWordsInString2(s) {
  let lastSpaceIndex = -1;
  let length = s.length;
  for (let strIndex = 0; strIndex <= length; strIndex++) {
    // console.log(strIndex === length);
    // console.log(s[strIndex] === " ");
    if (strIndex === length || s[strIndex] === " ") {
      let startIndex = lastSpaceIndex + 1;
      let endIndex = strIndex - 1;
      while (startIndex < endIndex) {
        const temp = s[startIndex];
        s[startIndex] = s[endIndex];
        s[endIndex] = temp;
        startIndex++;
        endIndex--;
      }
      lastSpaceIndex = strIndex;
    }
  }
  return s;
}

console.log(reverseWordsInString2("Let's take LeetCode contest"));
