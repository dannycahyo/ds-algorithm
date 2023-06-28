// Plain Recursion
function fib(n: number) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));

// Memoized Solution
function memoized_fib(n: number, memo: number[]) {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  let result;

  if (n < 2) {
    result = n;
  } else {
    result = memoized_fib(n - 1, memo) + memoized_fib(n - 2, memo);
  }

  memo[n] = result;
  return result;
}

function fibBottomUp(n: number) {
  if (n < 2) {
    return n;
  }
  let bottomUp: number[] = [];
  bottomUp[1] = 1;
  bottomUp[2] = 1;

  for (let i = 3; i < n + 1; i++) {
    bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
  }

  return bottomUp[n];
}

console.log(fibBottomUp(5));
