/*
Nth Fibonacci
The Fibonacci sequence is defined as follows: 
the first number of the sequence is 0, 
the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. 

Write a function that takes in an integer n and returns the nth Fibonacci number.

Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1. 
For the purpose of this question, the first Fibonacci number is F0; therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..

Sample Input #1
n = 2
Sample Output #1
1 // 0, 1


Sample Input #2
n = 6
Sample Output #2
5 // 0, 1, 1, 2, 3, 5
*/

// Recursive Approch
function fibonacci(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));

// Memoization Approach => Save the calculation to cache
function fibbonaciMemo(n) {
  const results = {};

  if (n === 1) return 0;
  if (n === 2) return 1;

  results[n] = fibbonaciMemo(n - 1) + fibbonaciMemo(n - 2);

  return results[n];
}

// Dynamic Programming Approach
function fibbonaciDp(n) {
  const dp = [];

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
}

console.log(fibbonaciDp(6));
