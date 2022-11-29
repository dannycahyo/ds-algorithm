/*
There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.

Example:
[10, 20, 20, 10, 10, 30, 50, 10, 20]


Output: 3
*/

function sockMerchant(n, ar) {
  //   for (let i = 0; i < n; i += 2) {
  //     const first = sortedShocks[i];
  //     const second = sortedShocks[i + 1];
  //     if (first === second) {
  //       countedPairOfShocks++;
  //     }
  //   }

  //   return countedPairOfShocks;

  const sortedShocks = ar.sort((x, y) => x - y);

  for (let i = 0; i < sortedShocks.length; i++) {
    if (sortedShocks[i] === sortedShocks[i + 1]) {
      sortedShocks[i + 1] = "pair";
    }
  }

  sortedShocks;

  return sortedShocks.filter((shock) => shock === "pair").length;
}

function sockMerchant2(n, ar) {
  // Write your code here
  // [1,2,1,2,1,3,2]
  // {1 => 1}
  // {2 => 1}
  // {1 => 0} pairs = 1
  // {2 => 0} pairs = 2
  let hash = new Map();
  let pairs = 0;

  for (let i = 0; i < ar.length; i++) {
    if (hash.get(ar[i])) {
      pairs++;
      hash.set(ar[i], 0);
    } else {
      hash.set(ar[i], 1);
    }
    console.log(hash, pairs);
  }
  hash;

  return pairs;
}

const test = [
  50, 49, 38, 49, 78, 36, 25, 96, 10, 67, 78, 58, 98, 8, 53, 1, 4, 7, 2, 9, 6,
  59, 93, 7, 4, 3, 67, 47, 12, 85, 84, 40, 81, 85, 89, 70, 33, 66, 6, 9, 13, 67,
  75, 42, 24, 73, 49, 28, 25, 5, 86, 53, 10, 44, 45, 35, 47, 11, 81, 10, 47, 16,
  49, 79, 52, 89, 100, 36, 6, 57, 96, 18, 23, 71, 11, 99, 95, 12, 78, 19, 16,
  64, 23, 77, 7, 19, 11, 5, 81, 43, 14, 27, 11, 63, 57, 62, 3, 56, 50, 9, 13,
  45,
];

console.log(sockMerchant2(7, [1, 2, 1, 2, 1, 3, 2]));
