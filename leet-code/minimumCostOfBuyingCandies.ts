/*
A shop is selling candies at a discount. 
For every two candies sold, 
the shop gives a third candy for free.

The customer can choose any candy to take away 
for free as long as the cost of the chosen candy 
is less than or equal to the minimum cost 
of the two candies bought.

For example, if there are 4 candies with
costs 1, 2, 3, and 4, and the customer buys candies 
with costs 2 and 3, they can take the candy with cost 1 
for free, but not the candy with cost 4.
Given a 0-indexed integer array cost, 
where cost[i] denotes the cost of the ith candy, 
return the minimum cost of buying all the candies.

EXAMPLES:

TOPICS => ARRAY, SORTING, GREEDY ALGORITHM
Input: cost = [1,2,3]
Output: 5
Explanation: We buy the candies with costs 2 and 3, 
and take the candy with cost 1 for free.
The total cost of buying all candies is 2 + 3 = 5. 
This is the only way we can buy the candies.
Note that we cannot buy candies with costs 1 and 3, 
and then take the candy with cost 2 for free.
The cost of the free candy has to be less than or equal 
to the minimum cost of the purchased candies.

Input: cost = [6,5,7,9,2,2]
Output: 23
Explanation: The way in which we can get the 
minimum cost is described below:
- Buy candies with costs 9 and 7 => 16 dolar
- Take the candy with cost 6 for free
- We buy candies with costs 5 and 2 => 7
- Take the last remaining candy with cost 2 for free
The minimum cost to buy all candies is 9 + 7 + 5 + 2 = 23.

Input: cost = [5,5]
Output: 10
Explanation: Since there are only 2 candies, we buy both of them. 
There is not a third candy we can take for free.
Hence, the minimum cost to buy all candies is 5 + 5 = 10.
*/

/*
Kalo kita beli 2 permen => Gratis 1 permen
Syarat u/ dapetin permen gratis, 
    - harga permen gratis nya itu harus kurang dari 
      sama atau sama dengan harga permen termurah 
      dari kedua permen yang dibeli.
*/

function minimumCostOfBuyingCandies(cost: number[]): number {
  if (cost.length === 2) return cost[0] + cost[1];
  if (cost.length === 1) return cost[0];
  cost.sort((a, b) => a - b); // sort in non-decreasing order
  let totalCost = 0;
  for (let i = 0; i < cost.length; i += 3) {
    let minCost = cost[i];
    totalCost += cost[i];
    if (i + 1 < cost.length) {
      minCost = Math.min(minCost, cost[i + 1]);
      totalCost += cost[i + 1];
    }
    if (i + 2 < cost.length && cost[i + 2] <= minCost) {
      totalCost += cost[i + 2];
    }
  }
  return totalCost;
}

console.log(minimumCostOfBuyingCandies([3, 3, 3, 1]));
