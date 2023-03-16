/*
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
Example 2:

Input: n = 3
Output: [-1,0,1]
Example 3:

Input: n = 1
Output: [0]
*/

var sumZero = function (n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result[i] = i * 2 - n + 1;
  }

  console.log(result);

  return result;
};

sumZero(1);
