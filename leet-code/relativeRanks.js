/*
You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. 
All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, 
the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

The 1st place athlete's rank is "Gold Medal".
The 2nd place athlete's rank is "Silver Medal".
The 3rd place athlete's rank is "Bronze Medal".
For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
Return an array answer of size n where answer[i] is the rank of the ith athlete.

Example: 
Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

Input: score = [10,3,8,9,4]
Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

Pseudo Code:
- Sort the array in the descending order
- Initialize a hash map to store the rank of the score
- Iterate through the sorted array and store the rank of the score
- Iterate through score array
   - Get the rank of the score
   - If the rank is 1, return "Gold Medal"
    - If the rank is 2, return "Silver Medal"
    - If the rank is 3, return "Bronze Medal"
    - If the rank is greater than 3, return the rank
*/

const relativeRanks = (score) => {
  const sortedScore = [...score].sort((a, b) => b - a);
  const scoreMap = new Map();

  sortedScore.forEach((score, index) => {
    scoreMap.set(score, index + 1);
  });

  return score.map((score) => {
    const rankOfTheScore = scoreMap.get(score);
    if (rankOfTheScore === 1) return "Gold Medal";
    if (rankOfTheScore === 2) return "Silver Medal";
    if (rankOfTheScore === 3) return "Bronze Medal";

    return rankOfTheScore.toString();
  });
};

console.log(relativeRanks([10, 3, 8, 9, 4]));
