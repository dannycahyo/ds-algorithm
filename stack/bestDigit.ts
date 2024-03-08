/*
Write a function that takes a positive integer represented as a string number and an integer numDigits. 
Remove numDigits from the string so that the number represented by the string is as large as possible afterwards.

Note that the order of the remaining digits cannot be changed. 
You can assume numDigits will always be less than the length of number and greater than or equal to 0.

Sample Input
----------------
number = "462839"
numDigits = 2

Sample Output
----------------
"6839" // remove digits 4 and 2
*/

// BAHASA TYPESCRIPT => JAVASCRIPT
// DIFFICULTY => MEDIUM
// DATA STRUCTURE => STACK (Last In First Out)
// DSA => DATA STRUCTURES & ALGORITHM

function bestDigit(number: string, numDigits: number): string {
  const selectedNumbers: string[] = [];

  for (const digit of number) {
    while (
      numDigits > 0 &&
      selectedNumbers.length > 0 &&
      digit > selectedNumbers[selectedNumbers.length - 1]
    ) {
      numDigits--;
      selectedNumbers.pop();
    }

    selectedNumbers.push(digit);
  }

  while (numDigits > 0) {
    numDigits--;
    selectedNumbers.pop();
  }

  return selectedNumbers.join("");
}

const stringNumber = "462839";

console.log(bestDigit(stringNumber, 2));

// EXPECTED OUTPUT => 6839
