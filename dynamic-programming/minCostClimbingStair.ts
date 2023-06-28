/*
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. 
Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.



Example:
// FIBBONACI => F(n) = F(n - 1) + F(n - 2)

F(0) = 0, 
F(1) = (1)
F(1) = (1)
F(n) = F(n) + Min(F(n - 2), F(n - 1))
Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.

start -- 10 -- 15 -- 20 -- end

- If we start from the 0 index, it could cost us =>
    - 10 + 15 => 15 (This is the minimum cost)
    - 10 + 20 => 20
But don't forget that we can also start the step from the index 1
- If we start from the 1 index, it could cost us =>
    - 15  -> We can directy reach the top of the stairs
    It only cost us 15


Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
*/

// function recursiveMinCostClimbingStairs(cost: number[]): number {}

function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const dp: number[] = [];

  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  return Math.min(dp[n - 1], dp[n - 2]);
}

console.log(minCostClimbingStairs([10, 15, 20]));
