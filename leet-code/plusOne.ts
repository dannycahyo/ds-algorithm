/*
You are given a large integer represented as an integer array numbers, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.
*/

/*
The Issue: JavaScript Number Precision Limits
Your solution has a fundamental problem with large integers due to JavaScript's number limitations. 
JavaScript's Number type uses IEEE-754 (64-bit floating point), 
which can only precisely represent integers up to 2^53 - 1 (approximately 9 quadrillion).

export function plusOne(digits: number[]): number[] {
  const stringDigit = digits.join("");
  const numberDigit = parseInt(stringDigit) + 1;
  const digitNumbers = String(numberDigit).split("");
  const finalDigits = digitNumbers.map((digitString) =>
    parseInt(digitString),
  );

  return finalDigits;
}
*/

export function plusOne(digits: number[]): number[] {
  const numbers = [...digits];
  for (let i = numbers.length - 1; i >= 0; i--) {
    numbers[i]++;

    const lastDigit = numbers[i];
    if (lastDigit === 10) {
      numbers[i] = 0;
    } else {
      return numbers;
    }
  }

  // If we get here, it means we had a carry after processing all digits
  // (e.g., [9,9,9] -> [0,0,0] with a carry)
  // Insert 1 at the beginning
  numbers.unshift(1);
  return numbers;
}

console.log(plusOne([1, 2, 9, 9]));
