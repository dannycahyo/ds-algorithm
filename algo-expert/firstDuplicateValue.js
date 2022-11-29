/*
Fin first duplicate value on array

Input: [2, 1 , 5, 2, 3, 3, 4]

Output: 2

Pseudo Code:
- Init hash map
- Looping through the array and add each of the value into the hash map
- Checks wether the value appears in the hash map, if so, then we're gonna return it
*/

function firstDuplicateValue(nums) {
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) {
      return num;
    } else {
      map.set(num);
    }
  }

  return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
