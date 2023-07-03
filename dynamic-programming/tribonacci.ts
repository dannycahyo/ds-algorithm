/*
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

Example:

Input: n = 25
Output: 1389537

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
*/

function tribonacci(n: number): number {
  const dp: number[] = [];

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[n];
}

function tribonacciRecursiveHelper(n: number, memo: number[]): number {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  if (n === 0) {
    return 0; // Base case: tribonacci(0) is 0
  }

  if (n === 1 || n === 2) {
    return 1; // Base cases: tribonacci(1) and tribonacci(2) are 1
  }

  // Calculate tribonacci(n) recursively
  const result =
    tribonacciRecursiveHelper(n - 1, memo) +
    tribonacciRecursiveHelper(n - 2, memo) +
    tribonacciRecursiveHelper(n - 3, memo);
  memo[n] = result;

  return result;
}

function tribonacciRecursive(n: number): number {
  if (n < 0) {
    throw new Error("n must be a non-negative integer."); // Handle invalid input
  }

  const memo: number[] = [];

  return tribonacciRecursiveHelper(n, memo);
}

console.log(tribonacciRecursive(25));

console.log(tribonacci(25));
