/*

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

F(1) = [[1]]
F(2) = [[1, 1]]
F(n) = [1,Sum(Fn - 1),1]
*/

function sum(nums: number[]): number[] {
  const result: number[] = [];

  let prevNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    result.push(num + prevNum);
    prevNum = num;
  }

  return result;
}

function pascalTriangle(numRows: number): number[][] {
  if (numRows === 1) {
    return [[1]];
  }

  const dp: number[][] = [];

  dp[0] = [1];
  dp[1] = [1, 1];

  for (let i = 2; i < numRows; i++) {
    const result = sum(dp[i - 1]);
    result.unshift(1);
    result.push(1);
    dp[i] = result;
  }

  return dp;
}

console.log(pascalTriangle(5));
