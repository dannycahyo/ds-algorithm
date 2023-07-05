// Plain Recursion
function fib(n: number) {
  if (n === 2) {
    return 1;
  }

  if (n === 1) {
    return 0;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));

// Memoized Solution
function memoizedFib(n: number, memo: number[] = []) {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  let result: number;

  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    result = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
  }

  memo[n] = result;
  return result;
}

console.log(memoizedFib(6));

function fibBottomUp(n: number) {
  let dp: number[] = [];
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
}

// Iterative but better for space complexity
function getFibN(n: number): number {
  const lastTwoFibNum = [0, 1];

  let counter = 3;

  while (counter <= n) {
    const nextFib = lastTwoFibNum[0] + lastTwoFibNum[1];
    lastTwoFibNum[0] = lastTwoFibNum[1];
    lastTwoFibNum[1] = nextFib;
    counter++;
  }

  return n > 1 ? lastTwoFibNum[1] : lastTwoFibNum[0];
}

console.log(getFibN(5));

console.log(fibBottomUp(5));
