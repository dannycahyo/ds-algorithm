const numJewelsInStones = function (jewels, stones) {
  let counter = 0;
  const hashMap = new Map();

  for (let i = 0; i < jewels.length; i++) {
    hashMap.set(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) {
    if (hashMap.has(stones[i])) {
      counter++;
    }
  }

  return counter;
};

console.log(numJewelsInStones("zz", "ZZZ"));
