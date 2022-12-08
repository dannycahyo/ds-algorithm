/*
Input: items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]]
Output: [[1,6],[3,9],[4,5]]
Explanation: 
The item with value = 1 occurs in items1 with weight = 1 and in items2 with weight = 5, total weight = 1 + 5 = 6.
The item with value = 3 occurs in items1 with weight = 8 and in items2 with weight = 1, total weight = 8 + 1 = 9.
The item with value = 4 occurs in items1 with weight = 5, total weight = 5.  
Therefore, we return [[1,6],[3,9],[4,5]].
*/

const mergeSimilarItems = function (items1, items2) {
  const hashMap = new Map();

  const result = [];

  items1.forEach((item) => {
    const [value, weight] = item;

    hashMap.set(value, weight);
  });

  items2.forEach((item) => {
    const [value, weight] = item;

    if (hashMap.has(value)) {
      hashMap.set(value, hashMap.get(value) + weight);
    } else {
      hashMap.set(value, weight);
    }
  });

  for (const [value, totalSum] of hashMap) {
    result.push([value, totalSum]);
  }

  return result.sort((a, b) => {
    const [aValue] = a;
    const [bValue] = b;

    return aValue - bValue;
  });
};

console.log(
  mergeSimilarItems(
    [
      [1, 3],
      [2, 2],
    ],
    [
      [7, 1],
      [2, 2],
      [1, 4],
    ]
  )
);
